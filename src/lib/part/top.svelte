<script>
    import BurgerMenu from "$lib/component/burgerMenu.svelte";
    let { height = $bindable(), partView } = $props()
    let listContainerSelf;
    let parentClassSelf;
    $effect(()=>{
        for (let index = 0; index < partView.length; index++) {
            const element = partView[index];
            if (element){
                buttonFocus[index] = 'md:text-blue-700  bg-blue-700 md:bg-transparent';
            }else{
                buttonFocus[index] = 'hover:bg-gray-100';
            };
        }
    })
    function menu(event) {
        event.target.setAttribute("disabled", '')
        let attrTime = setTimeout(() => {
            event.target.removeAttribute("disabled");
            clearTimeout(attrTime)
        }, 500);
        if (listContainerSelf.classList.contains('-top-96')){
            parentClassSelf.classList.remove('hidden');
            parentClassSelf.classList.add('block');
            let timeForBlock = setTimeout(() => {
                listContainerSelf.classList.remove('-top-96')
                listContainerSelf.classList.add('top-0')
                clearTimeout(timeForBlock)
            }, 1);
        }else if(listContainerSelf.classList.contains('top-0')){
            parentClassSelf.classList.remove('block');
            listContainerSelf.classList.remove('top-0')
            listContainerSelf.classList.add('-top-96')
            let time = setTimeout(() => {
                parentClassSelf.classList.add('hidden');
                clearTimeout(time);
            }, 1000);
        }
    }
    let buttonFocus = $state(['md:text-blue-700  bg-blue-700 md:bg-transparent', '', '', '']);
    function scroll( index){
        for (let index = 0; index < buttonFocus.length; index++) {
            buttonFocus[index] = 'hover:bg-gray-100';
        }
        buttonFocus[index] = 'md:text-blue-700  bg-blue-700 md:bg-transparent';
    }
</script>
<div class="w-full flex flex-row">
    <nav bind:clientHeight={height} class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-50 bg-white">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse z-50">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 xl:h-16" alt="Flowbite Logo">
                <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white xl:text-4xl">Vitrans</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse z-50">
                <button type="button" class=" text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-bold xl:text-2xl">Se connecter</button>
                <button disabled data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <BurgerMenu on:click={menu}/>
                </button>
            </div>
            <div class="hidden md:block">
                <div class="p-4 pt-0 duration-500 transition-all items-center justify-between -top-96 w-full md:flex md:w-auto md:order-1 relative left-1/2 -translate-x-1/2 md:top-0 lg:text-2xl" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a onclick={()=>{scroll(0)}} href="#Home" class="block py-2 px-3 text-gray-900 rounded md:p-0 {buttonFocus[0]}" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a onclick={()=>{scroll(1)}} href="#About" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[1]}">About</a>
                        </li>
                        <li>
                            <a onclick={()=>{scroll(2)}} href="#Services" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[2]}">Services</a>
                        </li>
                        <li>
                            <a onclick={()=>{scroll(3)}} href="#Footer" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[3]}">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div bind:this={parentClassSelf} class="overflow-hidden md:hidden hidden fixed w-full" style:top='{height}px'>
            <div bind:this={listContainerSelf} class="p-4 pt-0 duration-500 transition-all items-center justify-between -top-96 w-full md:flex md:w-auto md:order-1 relative left-1/2 -translate-x-1/2 md:top-0" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a onclick={()=>{scroll(0)}} href="#Home" class="block py-2 text-gray-900 px-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 {buttonFocus[0]}" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a onclick={()=>{scroll(1)}} href="#About" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[1]}">About</a>
                    </li>
                    <li>
                        <a onclick={()=>{scroll(2)}} href="#Services" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[2]}">Services</a>
                    </li>
                    <li>
                        <a onclick={()=>{scroll(3)}} href="#Footer" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {buttonFocus[3]}">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
     </nav>
  
</div>