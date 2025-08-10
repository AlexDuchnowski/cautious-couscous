<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import type { Vec2, Level } from "$lib/types";
    import Renderer from "$components/renderer.svelte";
	import { Direction } from "$lib/types";
	import { onMount } from "svelte";
	import { levels } from "$lib/levels";

    /* === PROPS ============================== */
    interface Props {
        levelIndex: number;
    }

    let {
        levelIndex
    }: Props = $props();

    /* === GAME =============================== */
    const level = levels[levelIndex]
    let game: Game = new Game(level);
    let playerPosition = $state(level.playerPosition);

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
            const nextLevelIndex = (levelIndex + 1) % levels.length;
            console.log("won. Going to " + nextLevelIndex);
            const currentUrl = new URL(window.location.href);
            currentUrl.pathname = `/level/${nextLevelIndex}`;
            window.location.href = currentUrl.toString();
        }

        event.preventDefault();
        playerPosition = game.getPlayerPosition();
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    })
</script>




<Renderer grid={level.grid} {playerPosition} />