<script>
    
    let {service = $bindable()} = $props();
    import ServiceCard from "$lib/component/serviceCard.svelte";
    let imagesHeight = $state([]);
    let minImageHeight = $derived(Math.min.apply(Math, imagesHeight));
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    let title;
    onMount(()=>{
        let tl = gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: title,
                start: 'top center',
                end: 'end center+=25%',
                toggleActions: 'play play reverse reverse'
            }
        });
        tl.from(title, {y:10, opacity:0, duration:0.3});
    })
</script>

<div>
    <div class="w-10/12 flex flex-row ml-auto mr-auto flex-wrap gap-6 md:w-11/12 mt-6 justify-evenly" id="Services" bind:this={service}>
        <div class="w-full">
            <h1 class="text-2xl text-primary-700 font-extrabold text-center m-6 ml-auto mr-auto lg:text-4xl xl:text-5xl" bind:this={title}>NOS SERVICES</h1>
        </div>
        <ServiceCard trueImageHeight = {minImageHeight} bind:imageHeight = {imagesHeight[0]} imgUrl='/entreprise.jpg' imgAlt='Service Express Livraison optimale' text="Vous avez un envoi urgent ? Notre Service Express est conçu pour répondre à vos besoins en un temps record, que ce soit à l'intérieur de votre wilaya ou vers des wilayas voisines"/>
        <ServiceCard trueImageHeight = {minImageHeight} bind:imageHeight = {imagesHeight[1]} imgUrl='/ecommerce.jpg' imgAlt='Service Standard : Livraison Fiable et Économique' text="Faites le choix de la tranquillité avec notre Service Standard, pour des livraisons sécurisées entre 48 et 72 heures à l'échelle nationale."/>
        <ServiceCard trueImageHeight = {minImageHeight} bind:imageHeight = {imagesHeight[2]} imgUrl='/entreprise.jpg' imgAlt='Emballage et Protection : Sécurisez Vos Envois Fragiles' text="Pour une livraison rapide, choisissez notre Service VIP : un ramassage et une livraison express !"/>
        <ServiceCard trueImageHeight = {minImageHeight} bind:imageHeight = {imagesHeight[3]} imgUrl='/entreprise.jpg' imgAlt='Ramassage : Pratique et Efficace' text="Facilitez vos envois avec notre Service de Ramassage : un chauffeur-livreur vient récupérer vos colis où que vous soyez !"/>
        <ServiceCard trueImageHeight = {minImageHeight} bind:imageHeight = {imagesHeight[4]} imgUrl='/entreprise.jpg' imgAlt='Cash on Delivery : Paiement à la Livraison' text="Optez pour la tranquillité avec notre service de paiement à la livraison : votre argent, en toute sécurité !"/>
    </div>
</div>