<script lang="ts">
    import type { PageProps } from './$types';
    import Game from '$components/game.svelte';

    let { data }: PageProps = $props();
</script>



<main>
    <Game levelIndex={data.levelIndex} />
</main>



<style lang="scss">
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>