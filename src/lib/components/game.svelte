<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import type { Vec2 } from "$lib/types";
    import { starterGame, smallGame, largeGame} from "$lib/puzzles";
    import Grid from "$components/grid.svelte";
	import { Direction } from "$lib/types";
	import { onMount } from "svelte";

    /* === GAME =============================== */
    const games: Game[] = [
        starterGame,
        smallGame,
        largeGame
    ];
    let game_index: number = 0;
    let game: Game = games[game_index];

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
            game_index = (game_index + 1) % games.length;
            game = games[game_index];
        }

        event.preventDefault();
        playerPosition = game.getPlayerPosition();
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    })
</script>




<Grid {grid} {playerPosition} />