<script>
    import { onMount } from "svelte";
    function getIndex(array, index){
        if(index != array.length - 1){
            return index + 1
        }else{
            return 0
        }
    }
    let slideParent;
    let carouselPosition = $state(['-translate-x-1/2', '-translate-x-[150%] opacity-0', '-translate-x-[150%] opacity-0']);
    onMount(()=>{    
        let slides = slideParent.children;
        let interval = setInterval(() => {
            loop: for (let index = 0; index < slides.length; index++) {
                if(!carouselPosition[index].includes('opacity-0')){
                    carouselPosition[index] = 'translate-x-1/2';

                    let indexOfAfterChild = getIndex(slides, index)
                    carouselPosition[indexOfAfterChild] = '-translate-x-1/2'
                    
                    let timerToLeftSlide = setTimeout(() => {
                        carouselPosition[index] = '-translate-x-[150%] opacity-0';
                        clearTimeout(timerToLeftSlide);
                    }, 1000);
                    break loop;
                }   
            }  
        }, 7000);
    })
    let imagesHeight = $state([]);
    let minImageHeight = $state();
    $effect(()=>{
        minImageHeight = Math.min.apply(Math, imagesHeight);
    })
</script>

<div id="animation-carousel" class="relative w-full max-h-[80vh]" data-carousel="static" style:height = "{minImageHeight}px">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden min-h-fit bg-white h-full" bind:this={slideParent}>
         <!-- Item 1 -->
        <div class="block duration-200 h-full ease-linear translate-x-0" data-carousel-item>
            <img src="/assets/carousel/c1.jpg" class="absolute block w-full -translate-y-1/2 top-1/2 left-1/2 duration-1000 ease-linear transition-transform {carouselPosition[0]}" alt="..." bind:offsetHeight={imagesHeight[0]}>
        </div>
        <!-- Item 2 -->
        <div class="duration-200 h-full ease-linear" data-carousel-item>
            <img src="/assets/carousel/c2.jpg" class="absolute block w-full -translate-y-1/2 top-1/2 left-1/2 duration-1000 ease-linear transition-transform {carouselPosition[1]}" alt="..." bind:offsetHeight={imagesHeight[1]}>
        </div>
        <!-- Item 3 -->
        <div class="duration-200 h-full ease-linear" data-carousel-item="active">
            <img src="/assets/carousel/entreprise.jpg" class="absolute block w-full -translate-y-1/2 top-1/2 left-1/2 duration-1000 ease-linear transition-transform {carouselPosition[2]}" alt="..." bind:offsetHeight={imagesHeight[2]}>
        </div>
    </div>
</div>
