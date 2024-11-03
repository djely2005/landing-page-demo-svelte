<script>
    let {plan = $bindable()} = $props();
    import PlanCard from "$lib/component/planCard.svelte";
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    let gsapPlans = $state([]);
    let imagesHeight = $state([]);
    let imageShownHeight = $state();
    let title;
    $effect(()=>{
        imageShownHeight = Math.min.apply(Math, imagesHeight);
    })
    onMount(()=>{
        let tl = gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: title,
                start: 'top center',
                toggleActions: "play play reverse reverse",
            }
        });
        tl.from(title, {y:10, opacity:0, duration:0.3});
    })
</script>
<div class="w-10/12 flex flex-row ml-auto mr-auto flex-wrap gap-6 justify-between md:w-11/12 mt-6" id="Plan" bind:this={plan}>
    <div class="w-full">
        <h1 class="text-2xl text-primary-700 font-extrabold text-center m-6 ml-auto mr-auto lg:text-4xl xl:text-5xl" bind:this={title}>Inscrivez-vous et commencez à envoyer</h1>
    </div>
    <PlanCard bind:gsapPlan = {gsapPlans[0]} bind:imageHeight={imagesHeight[0]} trueHeight= {imageShownHeight} imgUrl = '/ecommerce.jpg' imgAlt = 'E-commerce' text="Vous gérez une boutique en ligne ? Optimisez vos livraisons avec Vitrans Express ! Inscrivez-vous et bénéficiez d'un service rapide, fiable et adapté à vos besoins pour envoyer vos colis partout en Algérie"/>
    <PlanCard bind:gsapPlan = {gsapPlans[1]} bind:imageHeight={imagesHeight[1]} trueHeight= {imageShownHeight} imgUrl = '/entreprise.jpg' imgAlt = 'Entreprise' text = "Envoyez vos documents ou marchandises en toute sécurité avec Vitrans Express ! Inscrivez votre entreprise et profitez de solutions logistiques personnalisées pour vos envois professionnels"/>
    <PlanCard bind:gsapPlan = {gsapPlans[2]} bind:imageHeight={imagesHeight[2]} trueHeight= {imageShownHeight} imgUrl = '/ecommerce.jpg' imgAlt = 'Particulier' text = "Besoin d'envoyer un colis ? Que ce soit à vos proches ou pour une autre raison, inscrivez-vous et expédiez facilement avec notre service rapide et sécurisé"/>
</div>