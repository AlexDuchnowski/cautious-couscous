<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import type { Vec2, Movement } from "$lib/types";
    import Renderer from "$components/renderer.svelte";
	import { Direction } from "$lib/types";
	import { onMount } from "svelte";
    import { menu } from "$lib/levels/menu";
    import { stages } from "$lib/levels/stages";

    /* === PROPS ============================== */
    interface Props {
        stageIndex: number;
        levelIndex: number;
    }

    let {
        stageIndex,
        levelIndex
    }: Props = $props();

    let renderer: Renderer;

    /* === BINDINGS =========================== */
    let controlArea: HTMLElement;

    /* === GAME =============================== */
    console.log("Stage:", stageIndex, "Level:", levelIndex);
    const level = levelIndex === -1 ?
        menu[stageIndex] :
        stages[stageIndex][levelIndex];
    console.log("Loaded level:", level);
    let game: Game = new Game(level);
    console.log("Initialized game:", game);

    /* === INTERACTIONS ======================= */
    let currentPointerId: number | null = null;
    let pointerStartPosition: Vec2 | null = null;

    /* === RUNES ============================== */
    let transitioning = $state(false);

    /* === FUNCTIONS ========================== */
    function move(direction: Direction | "reset"): void {
        if (transitioning) return;

        let movement: Movement;
        switch (direction) {
            case Direction.Up:
                movement = game.movePlayer(Direction.Up);
                break;
            case Direction.Right:
                movement = game.movePlayer(Direction.Right);
                break;
            case Direction.Down:
                movement = game.movePlayer(Direction.Down);
                break;
            case Direction.Left:
                movement = game.movePlayer(Direction.Left);
                break;
            case "reset":
                game.reset();
                movement = {
                    start: { x: 0, y: 0 },
                    end: game.getPlayerPosition(),
                    d: null,
                    win: false
                };
                break;
            default:
                return;
        }

        renderer.movePlayerTo(movement);

        if (movement.win) {
            if (levelIndex === stages[stageIndex].length - 1) {
                // Last level in stage completed.
                if (stageIndex === stages.length - 1) {
                    // Last stage completed.
                    // Redirect to start.
                    window.location.href = `/0/-1`;
                    return;
                } else {
                    // Proceed to next stage (redirect to menu first).
                    const nextStageIndex = stageIndex + 1;
                    const currentUrl = new URL(window.location.href);
                    currentUrl.pathname = `/${nextStageIndex}/-1`;
                    window.location.href = currentUrl.toString();
                    return;
                }
            } else {
                // Proceed to next level.
                const nextLevelIndex = levelIndex + 1;
                const currentUrl = new URL(window.location.href);
                currentUrl.pathname = `/${stageIndex}/${nextLevelIndex}`;
                window.location.href = currentUrl.toString();
                return;
            }
        }
    }

    function handleKeydown(
        event: KeyboardEvent
    ) {
    
        switch (event.key) {
            case "ArrowUp":
            case "w":
                move(Direction.Up);
                break;
            case "ArrowRight":
            case "d":
                move(Direction.Right);
                break;
            case "ArrowDown":
            case "s":
                move(Direction.Down);
                break;
            case "ArrowLeft":
            case "a":
                move(Direction.Left);
                break;
            case "Escape":
                move("reset");
                break;
            default:
                return;
        }

        event.preventDefault();
    }

    function getDistanceBetween(pointA: Vec2, pointB: Vec2) {
        return Math.sqrt(
            (pointB.x - pointA.x) ** 2
            + (pointB.y - pointA.y) ** 2
        );
    }

    function handleGesture({ start, end }: {
        start: Vec2; end: Vec2;
    }) {
         // 1. Calculate the angle between start and end positions.
        const dx = end.x - start.x;
        const dy = start.y - end.y;
        const angleRadians = Math.atan2(dy, dx);
        const angleDegrees = (angleRadians * 180 / Math.PI + 360) % 360;

        // 2. Determine the move based on angle.
        switch (true) {
            case angleDegrees > 45 && angleDegrees <= 135:
                move(Direction.Up);
                break;
            case angleDegrees > 315 || angleDegrees <= 45:
                move(Direction.Right);
                break;
            case angleDegrees > 225 && angleDegrees <= 315:
                move(Direction.Down);
                break;
            case angleDegrees > 135 && angleDegrees <= 225:
                move(Direction.Left);
                break;
        }
    }

    function handlePointerDown(
        e: PointerEvent & { currentTarget: EventTarget & HTMLElement; }
    ) {
        if (!e.isPrimary) return;
        currentPointerId = e.pointerId;
        pointerStartPosition = {
            x: e.clientX,
            y: e.clientY
        };
        controlArea.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(
        e: PointerEvent & { currentTarget: EventTarget & HTMLElement; }
    ) {
        if (
            e.pointerId !== currentPointerId
            || pointerStartPosition === null
        ) return;

        // 1. Determine if enough movement has occurred.
        const pointerCurrentPosition = {
            x: e.clientX,
            y: e.clientY
        };
        const distanceBetween = getDistanceBetween(
            pointerStartPosition,
            pointerCurrentPosition
        );
        if (distanceBetween < 60) return;

        // 2. Handle Gesture
        handleGesture({
            start: pointerStartPosition,
            end: pointerCurrentPosition
        });

        // 3. Reset and release pointer.
        currentPointerId = null;
        pointerStartPosition = null;
        controlArea.releasePointerCapture(e.pointerId);
    }

    function handlePointerUp(
        e: PointerEvent & { currentTarget: EventTarget & HTMLElement; }
    ) {
        if (
            e.pointerId !== currentPointerId
            || pointerStartPosition === null
        ) return;

        // 1. Determine start position to use in angle calculation.
        let startPosition: Vec2;
        const pointerEndPosition = {
            x: e.clientX,
            y: e.clientY
        };
        const distanceBetween = getDistanceBetween(
            pointerStartPosition,
            pointerEndPosition
        );
        if (distanceBetween < 35) {
            // Counts as a tap/click instead of a swipe.
            // Movement will be calculated relative to player position.
            startPosition = renderer.getPlayerClientPosition();
        } else {
            // Counts as a swipe. Movement will be calculated relative
            // to the starting pointer position.
            startPosition = pointerStartPosition
        }
        handleGesture({
            start: startPosition,
            end: pointerEndPosition
        });

        // 2. Reset and release pointer.
        currentPointerId = null;
        pointerStartPosition = null;
        controlArea.releasePointerCapture(e.pointerId);
    }

    /* === LIFE CYCLES ======================== */
    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    })
</script>



<main
    bind:this={controlArea}
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onpointercancel={handlePointerUp}
>
    <Renderer
        bind:this={renderer}
        {level}
        bind:transitioning={transitioning}
    />
</main>



<style lang="scss">
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100svh;
        padding: 15px;
        overflow: hidden;
        touch-action: none;
    }
</style>