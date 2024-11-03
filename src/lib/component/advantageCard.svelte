<script>
    let {title, text} = $props();
    let titleRef, textRef;
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    let advantageCard;
    onMount(()=>{
        let tl = gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: advantageCard,
                start: 'top center+=25%',
                end: 'bottom center+=25%',
                toggleActions: "play play reverse reverse",
                scrub: true
            }
        });
        tl.from(titleRef, {y:10, opacity:0, duration:0.3})
        .from(textRef, {y:10, opacity:0, duration:0.3});
    })
</script>

<div class="flex flex-col items-center gap-4" bind:this = {advantageCard}> 
    <h2 class="font-extrabold text-xl md:text-lg lg:text-xl 2xl:text-5xl text-center xl:text-3xl" bind:this={titleRef}>{title}</h2>
    <p class=" w-3/4 text-center font-normal md:text-xl lg:text-2xl 2xl:text-4xl" bind:this={textRef}>{text}</p>
</div>