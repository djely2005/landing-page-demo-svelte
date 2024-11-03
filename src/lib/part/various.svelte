<script>
    let {about = $bindable()} = $props();
    import VariousCard from "$lib/component/variousCard.svelte";
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    let titleRef= [];
    let textRef = [];
    let img, title;
    onMount(()=>{
        let tl = gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: img,
                start: 'top+=10% center+=25%',
                end: 'bottom-=10% center+=25%',
                toggleActions: 'play play reverse reverse',
                scrub: true,
            }
        });
        tl.from(img, {x:-50, opacity:0, duration:1}).from(title, {opacity: 0, y:50, duration: 0.4});
        for (let index = 0; index < titleRef.length; index++) {
            tl.from(titleRef[index], {y:10, opacity:0, duration:0.6});
            tl.from(textRef[index], {y:10, opacity:0, duration:0.6});
        }
    })
</script>

<div class="w-11/12 mt-12 ml-auto mr-auto flex flex-col items-center flex-wrap lg:flex-row lg:justify-center lg:gap-10" id="About" bind:this={about}>
    <div class="w-10/12 xl:w-2/5">
        <div bind:this={img} id="various">
            <img src="/entreprise.jpg" alt="a propos">
        </div>
    </div>
    <div class="w-10/12 xl:w-2/5">
        <div class="w-full flex flex-col items-center gap-6">
            <h1 class="text-2xl text-primary-700 font-extrabold text-center m-6 ml-auto mr-auto lg:text-4xl xl:text-5xl" bind:this={title}>A PROPOS</h1>
            <VariousCard bind:titleRef = {titleRef[0]} bind:textRef = {textRef[0]} title = 'Qui Sommes-Nous ?' text = 'Vitrans Express se spécialise dans des solutions de livraison innovantes, tant domestiques que locales, parfaitement adaptées aux exigences des e-commerces, des entreprises et des particuliers. Notre mission est de vous offrir un service de livraison rapide, sécurisé et fiable pour tous vos documents et colis, quel que soit leur volume.'/>
            <VariousCard bind:titleRef = {titleRef[1]} bind:textRef = {textRef[1]} title = 'Notre Engagement : FAVREF' text = "Nous sommes fiers de respecter les principes de FAVREF : Rapide, Abordable, Polyvalent, Fiable, Efficace et Flexible. Que vous souhaitiez expédier un envoi à l'intérieur de votre wilaya ou au-delà, notre plateforme vous permet d'envoyer, suivre et surveiller vos colis avec une aisance professionnelle. Nous nous engageons à garantir une livraison rapide et sécurisée, à un coût maîtrisé, qu'il s'agisse d'un document urgent ou d'un colis volumineux."/>
        </div>
    </div>
</div>