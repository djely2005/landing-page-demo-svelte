<script>
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    let {imgUrl, imgAlt, text, imageHeight = $bindable(), trueImageHeight} = $props();
    let gsapService;
    onMount(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsapService,
                start : 'start center',
                end: 'end center',
                toggleActions: 'play play reverse reverse'
            }
        });
        tl.from(gsapService,{opacity: 0, x: 100, duration: 0.70});
    })
</script>

<div class="flex flex-col items-center gap-4 bg-white rounded-lg min-[1460px]:w-[30%] py-1" bind:this={gsapService}>
    <div class="w-11/12 h-44 overflow-hidden relative mt-4 rounded-lg" style:height="{trueImageHeight}px" >
        <img class="absolute bottom-0 w-full" src={imgUrl} alt={imgAlt} bind:offsetHeight={imageHeight}>
    </div>
    <h1 class="font-bold text-xl md:text-lg lg:text-xl 2xl:text-3xl text-center">{imgAlt}</h1>
    <p class="pb-6 w-11/12 text-center font-extralight md:text-xl lg:text-2xl 2xl:text-3xl">{text}</p>
</div>