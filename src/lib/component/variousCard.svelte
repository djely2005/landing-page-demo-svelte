<script>
    let {title, text, textRef = $bindable(), titleRef = $bindable()} = $props();
</script>

<div class="flex flex-col gap-2"> 
    <h2 class="text-2xl font-bold text-center xl:text-3xl 2xl:text-5xl" bind:this={titleRef}>{title}</h2>
    <p class="text-base font-light text-center xl:text-lg 2xl:text-xl" bind:this={textRef}>{text}</p>
</div>