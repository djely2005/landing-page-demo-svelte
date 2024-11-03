<script>
    import Carousel from "$lib/component/carousel.svelte";
    let {home = $bindable()} = $props();
</script>

<div class="relative" id="Home" bind:this={home}>
    <Carousel />
</div>
