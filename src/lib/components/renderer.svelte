<script lang="ts">
    /* === IMPORTS ============================ */
    import { CellType, type Grid, type Vec2 } from "$lib/types";

    /* === PROPS ============================== */
    interface Props {
        grid: Grid;
        playerPosition: Vec2;
    }

    let {
        grid,
        playerPosition
    }: Props = $props();

    /* === CONSTS ============================= */
    const renderScale = 4;
    const cellSize = 20 * renderScale;    // pixels
    const strokeWidth = 1 / renderScale;  // pixels
    const strokeOffset = 0.5 * strokeWidth;
    const width = grid[0].length;
    const height = grid.length;
    const margin = 3;       //pixels
    const svgWidth = width * cellSize + (width * strokeWidth + 2 * strokeWidth) + margin * 2;
    const svgHeight = height * cellSize + (height * strokeWidth + 2 * strokeWidth) + margin * 2;
    const cells: {
        type: Omit<CellType, CellType.Empty>;
        position: Vec2;
    }[] = [];
    for(let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (grid[y][x] !== CellType.Empty) {
                cells.push({
                    type: grid[y][x],
                    position: { x, y }
                });
            }
        }
    }
</script>



<svg
    class="game"
    style={`
        --strokeWidth: ${strokeWidth}px;
        --svgWidth: ${svgWidth}px;
        --svgHeight: ${svgHeight}px;
    `}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`
        -${margin}
        -${margin}
        ${svgWidth}
        ${svgHeight}
    `}
>
    <!-- grid -->
    <g class="grid">
        <rect
            x={strokeOffset}
            y={strokeOffset}
            width={width * (cellSize + strokeWidth)}
            height={height * (cellSize + strokeWidth)}
        />
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
                class={`type-${type}`}
                x={strokeWidth + position.x * (cellSize + strokeWidth)}
                y={strokeWidth + position.y * (cellSize + strokeWidth)}
                width={cellSize}
                height={cellSize}
            />
        {/each}
    </g>

    <!-- player -->
    <circle class="player"
        cx={strokeWidth + playerPosition.x * (cellSize + strokeWidth) + 0.5 * cellSize}
        cy={strokeWidth + playerPosition.y * (cellSize + strokeWidth) + 0.5 * cellSize}
        r={0.5 * cellSize}
    />
</svg>



<style lang="scss">
    .game {
        display: block;
        width: var(--svgWidth);
        height: var(--svgHeight);

        .grid {
            * {
                stroke: black;
                stroke-width: var(--strokeWidth);
                vector-effect: non-scaling-stroke;
            }

            rect {
                fill: none;
            }
        }

        .cells {
            * {
                stroke: none;
            }

            .type-0 {
                fill: aliceblue;
            }

            .type-1 {
                fill: chartreuse;
            }

            .type-2 {
                fill: slategray;
            }

            .type-3 {
                fill: olive; // to be replaced with a tunnel sprite/shape
            }

            .type-4 {
                fill: olive; // to be replaced with a tunnel sprite/shape
            }
            .type-5 {
                fill: salmon;
            }
        }

        .player {
            fill: darkorange;
        }
    }
</style>