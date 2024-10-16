<template>
    <div class="bg-gray-900 flex text-white flex items-center justify-center py-5">
        <div class="flex flex-col items-center justify-center">
         
         <img class="w-10 " src="@/assets/logo.png" alt="logo">
            <ul class="flex space-x-5">
                <li><a href="#home">Home •</a></li>
                <li><a href="#about">About •</a></li>
                <li><a href="#portfolio">Portfolio •</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
            
           <div>
            <p class="flex justify-center space-x-5 mt-5 text-black text-lg">
                <a 
                    class="px-2 py-1 rounded-full bg-white h-8 w-8 flex items-center justify-center shadow-lg" 
                    href="https://wa.me/261326784338"
                    target="_blank">
                    <font-awesome-icon :icon="['fab','whatsapp']"/>
                </a>

                <a 
                    class="px-2 py-1 rounded-full bg-white h-8 w-8 flex items-center justify-center shadow-lg" 
                    href="https://mg.linkedin.com/in/s%C3%A9bastien-randriamanana-29473626a"
                    target="_blank">
                    <font-awesome-icon 
                    :icon="['fab','linkedin']"/>
                </a>

                <a 
                    class="px-2 py-1 rounded-full bg-white h-8 w-8 flex items-center justify-center shadow-lg" 
                    href="https://www.facebook.com/aina.mahomie"
                    target="_blank">
                    <font-awesome-icon 
                    :icon="['fab','facebook']"/>
                </a>

                <a 
                    class="px-2 py-1 rounded-full bg-white h-8 w-8 flex items-center justify-center shadow-lg" 
                    href="https://www.instagram.com/lovasoa_aina?igsh=MTRpdXJ5ZjJ1Z3RuZQ=="
                    target="_blank">
                    <font-awesome-icon 
                    :icon="['fab','instagram']"/>
                </a>

                <a 
                    class="px-2 py-1 rounded-full bg-white h-8 w-8 flex items-center justify-center shadow-lg"
                    href="https://github.com/Ainasebastien56"
                    target="_blank">
                    <font-awesome-icon 
                    :icon="['fab','github']"/>
                </a>
            </p>
            <p class="text-md mt-5 text-gray-300">© Copyright. All rights reserved.</p>
           </div>
           
        </div>
    </div>
</template>

<script>
    export default{
        name:'MyFooter'
    }
</script>