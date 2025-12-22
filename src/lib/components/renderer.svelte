<script lang="ts">
    /* === IMPORTS ============================ */
    import {
        CellClass,
        Direction,
        Empty,
        Wall,
        Goal,
        Sticky,
        type Level,
        type Movement,
        type Vec2
    } from "$lib/types";
    import { mod } from "$lib/game";

    /* === PROPS ============================== */
    interface Props {
        level: Level;
        transitioning: boolean;
    }

    let {
        level,
        transitioning = $bindable()
    }: Props = $props();

    /* === CONSTS ============================= */
    const renderScale = 4;
    const cellSize = 20 * renderScale;      // pixels
    const strokeWidth = 1 / renderScale;    // pixels
    const strokeOffset = 0.5 * strokeWidth;
    const width = level.grid[0].length;
    const height = level.grid.length;
    const margin = 3;                       // pixels
    const svgWidth = width * cellSize + (width * strokeWidth + 2 * strokeWidth) + margin * 2;
    const svgHeight = height * cellSize + (height * strokeWidth + 2 * strokeWidth) + margin * 2;
    const cells: {
        type: CellClass;
        position: Vec2;
    }[] = [];
    for(let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (!(level.grid[y][x] instanceof Empty)) {
                cells.push({
                    type: level.grid[y][x],
                    position: { x, y }
                });
            }
        }
    }

    /* === BINDINGS =========================== */
    let svg: SVGElement;
    let player: SVGGElement;

    /* === FUNCTIONS ========================== */
    function getTranslate(position: Vec2) {
        return {
            x: position.x * (cellSize + strokeWidth),
            y: position.y * (cellSize + strokeWidth)
        };
    }

    function getTransitionDuration(cells: number): string {
        return `${cells * 0.07}s`;
    }

    /* === RUNES ============================== */
    let playerPosition = $state(level.playerPosition);
    let playerTranslate = $derived(getTranslate(playerPosition));

    /* === FUNCTIONS ========================== */
    export function getPlayerClientPosition(): Vec2 {
        const svgDOMRect = svg.getBoundingClientRect();
        const playerTranslateSnapshot = $state.snapshot(playerTranslate);
        const playerPercentage: Vec2 = {
            x: (playerTranslateSnapshot.x + strokeWidth + 0.5 * cellSize) / svgWidth,
            y: (playerTranslateSnapshot.y + strokeWidth + 0.5 * cellSize) / svgHeight
        };
        return {
            x: svgDOMRect.x + svgDOMRect.width * playerPercentage.x,
            y: svgDOMRect.y + svgDOMRect.height * playerPercentage.y
        };
    }

    export function movePlayerTo(movement: Movement): void {
        transitioning = true;
        let playerEndPosition: Vec2;
        let cellsMoved = 0;

        switch (movement.d) {
            case Direction.Up:
                if(movement.end.y >= playerPosition.y) {
                    // loop around
                    playerEndPosition = {
                        x: movement.end.x,
                        y: -1 * height + movement.end.y
                    };
                    cellsMoved = playerPosition.y + height - movement.end.y;
                } else {
                    playerEndPosition = movement.end;
                    cellsMoved = playerPosition.y - movement.end.y;
                }
                break;
            case Direction.Right:
                if(movement.end.x <= playerPosition.x) {
                    // loop around
                    playerEndPosition = {
                        x: width + movement.end.x,
                        y: movement.end.y
                    };
                    cellsMoved = width - playerPosition.x + movement.end.x;
                } else {
                    playerEndPosition = movement.end;
                    cellsMoved = movement.end.x - playerPosition.x;
                }
                break;
            case Direction.Down:
                if(movement.end.y <= playerPosition.y) {
                    // loop around
                    playerEndPosition = {
                        x: movement.end.x,
                        y: height + movement.end.y
                    };
                    cellsMoved = height - playerPosition.y + movement.end.y;
                } else {
                    playerEndPosition = movement.end;
                    cellsMoved = movement.end.y - playerPosition.y;
                }
                break;
            case Direction.Left:
                if(movement.end.x >= playerPosition.x) {
                    // loop around
                    playerEndPosition = {
                        x: -1 * width + movement.end.x,
                        y: movement.end.y
                    };
                    cellsMoved = playerPosition.x + width - movement.end.x;
                } else {
                    playerEndPosition = movement.end;
                    cellsMoved = playerPosition.x - movement.end.x;
                }
                break;
            case null:
                playerEndPosition = movement.end;
                cellsMoved = 0;
                transitioning = false;
                break;
        }

        player.style.transitionDuration = getTransitionDuration(cellsMoved);
        playerPosition = playerEndPosition;
    }

    function handleTransitionEnd(
        e: TransitionEvent & { currentTarget: EventTarget & SVGElement; }
    ) {
        if (e.propertyName !== "transform") return;

        transitioning = false;
        if (
            (playerPosition.x >= 0 && playerPosition.x < width)
            && (playerPosition.y >= 0 && playerPosition.y < height)
        ) {
            // center player is on the grid, no need to reset position
            return;
        }

        // disable transition and move center player back onto the grid
        player.style.transitionDuration = "0s";
        playerPosition = {
            x: mod(playerPosition.x, width),
            y: mod(playerPosition.y, height)
        };
    }
</script>



<svg
    bind:this={svg}
    class="game"
    style={`
        --strokeWidth: ${strokeWidth}px;
        --svgWidth: ${svgWidth}px;
        --svgHeight: ${svgHeight}px;
        --playerTransform: ${playerTranslate.x}px, ${playerTranslate.y}px;
    `}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`
        -${margin}
        -${margin}
        ${svgWidth}
        ${svgHeight}
    `}
    ontransitionend={handleTransitionEnd}
    ontransitioncancel={handleTransitionEnd}
>
    <!-- grid -->
    <g class="grid">
        {#each { length: height - 1 } as _, i}
            <line
                x1={strokeOffset}
                y1={strokeOffset + (i + 1) * (cellSize + strokeWidth)}
                x2={strokeOffset + width * (cellSize + strokeWidth)}
                y2={strokeOffset + (i + 1) * (cellSize + strokeWidth)}
            />
        {/each}
        {#each { length: width - 1 } as _, i}
            <line
                x1={strokeOffset + (i + 1) * (cellSize + strokeWidth)}
                y1={strokeOffset}
                x2={strokeOffset + (i + 1) * (cellSize + strokeWidth)}
                y2={strokeOffset + width * (cellSize + strokeWidth)}
            />
        {/each}
    </g>

    <!-- cells -->
    <g class="cells">
        {#each cells as { type, position } }
            <rect
                class={`cell-${type.constructor.name}`}
                x={strokeWidth + position.x * (cellSize + strokeWidth)}
                y={strokeWidth + position.y * (cellSize + strokeWidth)}
                width={cellSize}
                height={cellSize}
            />
        {/each}
    </g>

    <!-- player -->
    <g bind:this={player} class="player">
        <!-- center -->
        <circle
            cx={strokeWidth + 0.5 * cellSize}
            cy={strokeWidth + 0.5 * cellSize}
            r={0.5 * cellSize}
        />
        <!-- top -->
        <circle
            cx={strokeWidth + 0.5 * cellSize}
            cy={strokeWidth + 0.5 * cellSize - height * (cellSize + strokeWidth)}
            r={0.5 * cellSize}
        />
        <!-- right -->
        <circle
            cx={strokeWidth + 0.5 * cellSize + width * (cellSize + strokeWidth)}
            cy={strokeWidth + 0.5 * cellSize}
            r={0.5 * cellSize}
        />
        <!-- bottom -->
        <circle
            cx={strokeWidth + 0.5 * cellSize}
            cy={strokeWidth + 0.5 * cellSize + height * (cellSize + strokeWidth)}
            r={0.5 * cellSize}
        />
        <!-- left -->
        <circle
            cx={strokeWidth + 0.5 * cellSize - width * (cellSize + strokeWidth)}
            cy={strokeWidth + 0.5 * cellSize}
            r={0.5 * cellSize}
        />
    </g>

    <!-- clip -->
    <polygon
        class="clip"
        points={`
            0,0
            -${margin},-${margin}
            -${margin},${svgHeight - margin}
            ${svgWidth - margin},${svgHeight - margin}
            ${svgWidth - margin},-${margin}
            -${margin},-${margin}
            0,0
            ${svgWidth - 2 * margin},0
            ${svgWidth - 2 * margin},${svgHeight - 2 * margin}
            0,${svgHeight - 2 * margin}
        `}
    />

    <!-- border -->
    <rect
        class="border"
        x={strokeOffset}
        y={strokeOffset}
        width={width * (cellSize + strokeWidth)}
        height={height * (cellSize + strokeWidth)}
    />
</svg>



<style lang="scss">
    .game {
        display: block;
        width: 100%;
        max-width: var(--svgWidth);

        .grid line, .border {
            stroke: black;
            stroke-width: var(--strokeWidth);
            vector-effect: non-scaling-stroke;
        }

        .cells {
            * {
                stroke: none;
            }

            .cell-Sticky {
                fill: powderblue;
            }

            .cell-Goal {
                fill: darkorange;
            }

            .cell-Wall {
                fill: slategray;
            }
            .cell-Portal {
                fill: powderblue;
            }
        }

        .player {
            transform: translate(var(--playerTransform));
            transition: transform 0s cubic-bezier(0.52, 0, 0.48, 1);

            * {
                fill: darkorange;
                stroke: slategray;
            }
        }

        .clip {
            fill: white;
        }

        .border {
            fill: none;
        }
    }
</style>