<template>
    <div class="py-10 bg-black text-white  px-5 md:px-10 py-2">

        <div class="w-full  flex flex-col  items-center ">
            <h1 class=" title font-semibold bg-gradient-to-b from-white to-white/25 bg-clip-text text-transparent tracking-widest text-center leading-none mb-5">SKILLS</h1>
            <div class="w-full flex flex-row items-center justify-center ">
                <div class="  h-auto mx-5 image " v-for="image in images" :key="image.id">
                <img  class="w-full h-full " :src="image.src" alt="logo"/>
            </div>
            </div>
            
         </div>
       
    </div>
</template>

<script>
import image1 from '@/assets/images/angular.svg';
import image2 from  '@/assets/images/git.svg';
import image3 from '@/assets/images/github.svg';
import image4 from '@/assets/images/Javascript.svg';
import image5 from '@/assets/images/nodejs.svg';
import image6 from '@/assets/images/react.svg';
import image7 from '@/assets/images/typescript.png';
import image8 from '@/assets/images/vuejs.svg';

    export default{
        name:'MySkills',

       data(){
        return{
            images:[
            {id:1, src:image1},
            {id:2, src:image2},
            {id:3, src:image3},
            {id:4, src:image4},
            {id:5, src:image5},
            {id:6, src:image6},
            {id:7, src:image7},
            {id:8, src:image8},
           
            ]
        }
       },
       methods:{
    
       } 
    }
</script>

<style scoped>

.title{
    font-size: 100px;
}
.image{
    font-size: 50px;
    transition:.5s;
    animation: slideDown 3s infinite;

}

@keyframes slideDown{
    0%{
        transform: translateX(100%);
        opacity:0;
    }
    50%{
        transform: translateX(0);
        opacity:1;
    }
    100%{
        transform:translateX(-100%);
        opacity:0;
    }
}
</style>
