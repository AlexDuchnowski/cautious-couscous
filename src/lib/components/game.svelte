<script lang="ts">
    /* === IMPORTS ============================ */
    import { Game } from "$lib/game";
    import { smallPuzzleGrid, smallPuzzlePlayerPosition } from "$lib/puzzles";
    import Grid from "$components/grid.svelte";

    /* === GAME =============================== */
    const game = new Game(
        smallPuzzleGrid,
        smallPuzzlePlayerPosition
    );

    let grid = game.getGrid();
    let playerPosition = game.getPlayerPosition();
</script>



<Grid {grid} />