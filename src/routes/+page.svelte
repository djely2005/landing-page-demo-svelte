<script>
    import Top from '$lib/part/top.svelte';
    import Home from '$lib/part/home.svelte';
    import Plan from '$lib/part/plan.svelte';
    import Various from '$lib/part/various.svelte';
    import Service from '$lib/part/service.svelte';
    import Advantages from '$lib/part/advantages.svelte';
    import Footer from '$lib/part/footer.svelte';
    import { onMount } from "svelte";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    let partView = $state([true, false, false, false]);
    function partViewCheck(index, partView){
        for (let index = 0; index < partView.length; index++) {
            partView[index] = false;
        }
        partView[index] = true; 
        return partView;
    }
    onMount(()=>{
        gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: home,
                start: 'top top+=96px',
                end: 'bottom top+=96px',
                toggleActions: 'play play reverse reverse',
                onEnter: ()=>{
                    partView = partViewCheck(0, partView);
                },
                onEnterBack: ()=>{
                    partView = partViewCheck(0, partView);
                },
                onLeave: ()=>{
                    partView = [false, false, false, false];
                },
                onLeaveBack: ()=>{
                    partView = [false, false, false, false];
                }
            }
        });
        gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: about,
                start: 'top top+=96px',
                end: 'bottom top+=96px',
                toggleActions: 'play play reverse reverse',
                onEnter: ()=>{
                    partView = partViewCheck(1, partView);
                },
                onEnterBack: ()=>{
                    partView = partViewCheck(1, partView);
                },
                onLeave: ()=>{
                    partView = [false, false, false, false];
                },
                onLeaveBack: ()=>{
                    partView = [false, false, false, false];
                }
            }
        });
        gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: service,
                start: 'top top+=96px',
                end: 'bottom top+=96px',
                toggleActions: 'play play reverse reverse',
                onEnter: ()=>{
                    partView = partViewCheck(2, partView);
                },
                onEnterBack: ()=>{
                    partView = partViewCheck(2, partView);
                },
                onLeave: ()=>{
                    partView = [false, false, false, false];
                },
                onLeaveBack: ()=>{
                    partView = [false, false, false, false];
                }
            }
        });
        gsap.timeline({
            defaults:{lazy: false},
            scrollTrigger:{
                trigger: footer,
                start: 'top bottom',
                end: 'bottom+=1px bottom',
                toggleActions: 'play play reverse reverse',
                onEnter: ()=>{
                    partView = partViewCheck(3, partView);
                },
                onEnterBack: ()=>{
                    partView = partViewCheck(3, partView);
                },
                onLeave: ()=>{
                    partView = [false, false, false, false];
                },
                onLeaveBack: ()=>{
                    partView = [false, false, false, false];
                }
            }
        });
    })
    let upperMargin = $state()
    let {home, plan, about, service, advantage, footer} = $state("");

</script>
<div>
    <Top bind:height={upperMargin} home={home} plan={plan} about={about} service={service} advantage={advantage} footer={footer} partView={partView}/>
    <div style="height: {upperMargin}px;">
    </div>
    <Home bind:home = {home}/>
    <Plan bind:plan = {plan}/>
    <br>
    <br>
    <br>
    <Various bind:about = {about}/>
    <br>
    <br>
    <br>
    <Service bind:service = {service}/>
    <br>
    <br>
    <br>
    <Advantages bind:advantage = {advantage}/>
    <br>
    <br>
    <br>
    <Footer bind:footer = {footer}/>
    
</div>