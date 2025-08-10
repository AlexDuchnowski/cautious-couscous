<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import type { Vec2 } from "$lib/types";
    import { smallPuzzleGrid, smallPuzzlePlayerPosition } from "$lib/puzzles";
    import Grid from "$components/grid.svelte";
	import { Direction } from "$lib/types";
	import { onMount } from "svelte";

    /* === GAME =============================== */
    const game = new Game(
        smallPuzzleGrid,
        smallPuzzlePlayerPosition
    );

    let grid = game.getGrid();
    let playerPosition = $state(game.getPlayerPosition());

    function handleKeydown(
        ev: KeyboardEvent
    ) {
        let movement: { start: Vec2; end: Vec2; d: Direction; win: boolean };
    
        switch (ev.key) {
            case "ArrowUp":
            case "w":
                movement = game.movePlayer(Direction.Up);
                break;
            case "ArrowRight":
            case "d":
                movement = game.movePlayer(Direction.Right);
                break;
            case "ArrowDown":
            case "s":
                movement = game.movePlayer(Direction.Down);
                break;
            case "ArrowLeft":
            case "a":
                movement = game.movePlayer(Direction.Left);
                break;
            default:
                return;
        }

        playerPosition = movement.end;
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    })
</script>




<Grid {grid} {playerPosition} />