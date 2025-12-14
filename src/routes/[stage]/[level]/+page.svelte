<script lang="ts">
    import type { PageProps } from './$types';
    import Game from '$components/game.svelte';

    let { data }: PageProps = $props();
</script>



<Game stageIndex={data.stageIndex} levelIndex={data.levelIndex} />