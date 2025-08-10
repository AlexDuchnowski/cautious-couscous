<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import type { Vec2 } from "$lib/types";
    import Grid from "$components/grid.svelte";
	import { Direction } from "$lib/types";
	import { onMount } from "svelte";
	import { levels } from "$lib/levels";

    /* === GAME =============================== */
    let level_index: number = 0;
    let game: Game = new Game (levels[level_index]);

    let grid = game.getGrid();
    let playerPosition = $state(game.getPlayerPosition());

    function handleKeydown(
        event: KeyboardEvent
    ) {
        let movement: { start: Vec2; end: Vec2; d: Direction; win: boolean };
    
        switch (event.key) {
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
            case "Escape":
                game.reset();
                return;
            default:
                return;
        }

        if (movement.win) {
            level_index = (level_index + 1) % levels.length;
            game = new Game(levels[level_index]);
        }

        event.preventDefault();
        playerPosition = game.getPlayerPosition();
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    })
</script>




<Grid {grid} {playerPosition} />