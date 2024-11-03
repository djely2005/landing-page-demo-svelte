<script>
    let {advantage = $bindable()} = $props();
    import AdvantageCard from "$lib/component/advantageCard.svelte";
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
                start: 'top center+=25%',
                end: 'bottom center+=25%',
                toggleActions: "play play reverse reverse",
                scrub: true,
            }
        });
        tl.from(title, {y:10, opacity:0, duration:0.3});
    })
</script>

<div>
    <div class="w-11/12 mt-6 ml-auto mr-auto flex flex-col items-center gap-10" bind:this={advantage}>
        <div class="w-full">
            <h1 class="text-2xl text-primary-700 font-extrabold text-center m-6 ml-auto mr-auto lg:text-4xl xl:text-5xl" bind:this={title}>NOS AVANTAGES</h1>
        </div>
        <div class="w-full flex flex-col items-center gap-20">
            <AdvantageCard title='Livraison Express et Garantie de Délais' text="Options de livraison optimale (J, J+1, selon destination) Suivi en temps réel des colis"/>
            <AdvantageCard title='Tarification Flexible' text="Réductions en fonction de la fréquence et du volume. Tarification adaptée selon le type d’envoi (standard, fragile, urgent)."/>
            <AdvantageCard title='Assurance incluse - Assurance gratuite' text="Pour couvrir les colis jusqu'à une certaine valeur, avec la possibilité d'ajouter une assurance supplémentaire pour les biens de plus grande valeur."/>
            <AdvantageCard title='Prise en charge personnalisée' text="Service de ramassage directement au domicile ou au bureau. Flexibilité dans les points de dépôt avec un réseau étendu de points de dépôt et de retrait."/>
            <AdvantageCard title='Gestion et Support Client 24/7' text="Support client disponible 24/7 pour répondre aux questions, résoudre les problèmes, et suivre les colis. Service après-vente efficace, avec une réactivité rapide en cas de réclamation ou de problème de livraison."/>
            <AdvantageCard title='Service de gestion des retours' text="Gestion des retours simplifiée, particulièrement important pour les entreprises de e-commerce, avec plusieurs options adaptées aux profiles."/>
        </div>
    </div>
</div>