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
    const cellSize = 20;    // pixels
    const strokeWidth = 1;  // pixels
    const width = grid[0].length;
    const height = grid.length;
    const margin = 3;       //pixels
    const svgWidth = width * cellSize + (width * strokeWidth + 2 * strokeWidth) + margin * 2;
    const svgHeight = height * cellSize + (height * strokeWidth + 2 * strokeWidth) + margin * 2;

    let cells = $derived.by(() => {
        const cells: {
            type: Omit<CellType, CellType.Empty>;
            position: Vec2
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
        return cells;
    });
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
            x={margin + 0.5 * strokeWidth}
            y={margin + 0.5 * strokeWidth}
            width={width * (cellSize + strokeWidth)}
            height={height * (cellSize + strokeWidth)}
        />
        {#each { length: height - 1 } as _, i}
            <line
                x1={margin + 0.5 * strokeWidth}
                y1={margin + 0.5 * strokeWidth + (i + 1) * (cellSize + strokeWidth)}
                x2={margin + width * (cellSize + strokeWidth) +  0.5* strokeWidth}
                y2={margin + 0.5 * strokeWidth + (i + 1) * (cellSize + strokeWidth)}
            />
        {/each}
        {#each { length: width - 1 } as _, i}
            <line
                x1={margin + 0.5 * strokeWidth + (i + 1) * (cellSize + strokeWidth)}
                y1={margin + 0.5 * strokeWidth}
                x2={margin + 0.5 * strokeWidth + (i + 1) * (cellSize + strokeWidth)}
                y2={margin + width * (cellSize + strokeWidth) +  0.5* strokeWidth}
            />
        {/each}
    </g>

    <!-- cells -->
    <g class="cells">
        {#each cells as { type, position } }
            <rect
                class={`type-${type}`}
                x={margin + strokeWidth + position.x * (cellSize + strokeWidth)}
                y={margin + strokeWidth + position.y * (cellSize + strokeWidth)}
                width={cellSize}
                height={cellSize}
            />
        {/each}
    </g>

    <!-- player -->
    <circle
        cx={margin + strokeWidth + playerPosition.x * (cellSize + strokeWidth) + 0.5 * cellSize}
        cy={margin + strokeWidth + playerPosition.y * (cellSize + strokeWidth) + 0.5 * cellSize}
        r={0.5 * cellSize}
    />
</svg>



<style lang="scss">
    .game {
        display: block;
        width: calc(2 * var(--svgWidth));
        height: calc(2 * var(--svgHeight));

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

            .type-1 {
                fill: blue;
            }

            .type-2 {
                fill: red;
            }
        }
    }
</style>