<script>
    let {imgUrl, imgAlt, text, imageHeight = $bindable(), trueHeight, gsapPlan = $bindable()} = $props();
    import { onMount, tick } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    
    onMount(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsapPlan,
                start : 'start center',
                end: 'center center',
                toggleActions: "play play reverse reverse",
                scrub: true,
            }
        });
        tl.from(gsapPlan,{opacity: 0, x: 100, duration: 0.70});
    })
</script>

<div class="flex flex-col items-center gap-4 bg-white rounded-lg min-[1460px]:w-[30%] py-1 opacity-1 translate-x-0" bind:this={gsapPlan}>
    <div class="w-11/12 overflow-hidden relative mt-4 rounded-lg h-1" style:height = '{trueHeight}px'>
        <img class="absolute bottom-0" src={imgUrl} alt={imgAlt} bind:offsetHeight={imageHeight}>
    </div>
    <h1 class="font-bold text-2xl md:text-7xl lg:text-4xl 2xl:text-5xl">{imgAlt}</h1>
    <p class="pb-3 w-11/12 text-center font-extralight md:text-xl lg:text-2xl 2xl:text-3xl">{text}</p>
</div>
