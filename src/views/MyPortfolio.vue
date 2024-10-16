<template>
    <div class=" w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-700 py-20">
        <div class="w-full flex items-center justify-center">
            <h1 class="text-6xl md:text-8xl font-semibold bg-gradient-to-b from-white to-white/25 bg-clip-text text-transparent tracking-widest text-center mb-5">MY PORTFOLIO</h1>
        </div>
        <swiper
            :modules="modules"
            navigation
            :pagination="{clickable:true}"
            effect="cube"
            class=" w-11/12"
            
        >
            <swiper-slide v-for="picture in pictures" :key="picture.alt">
                <div :class="picture.bg" class="w-full flex flex-col items-center justify-center text-white text-justify pb-20 pt-5 rounded-lg">
                   <div  class="w-11/12 mb-5 rounded-xl">
                        <img :src="picture.src" alt="image"  @click="showMessage()" class="w-full h-60 md:h-96 rounded">
                   </div>
                   <div class="w-11/12 flex flex-col">
                        <h3 class="font-semibold font-sans text-2xl text-white">{{picture.title}}</h3>
                        <span class="mt-2 mb-5 h-0.5 w-10 bg-white"></span>
                        <h5 class="text-lg italic">{{ picture.tech }}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error est accusantium, beatae autem tempora esse velit debitis molestiae voluptas nobis sapiente reprehenderit explicabo delectus? Incidunt odit fugiat omnis quo.</p>
                        <p class="flex space-x-5 text-2xl mt-5">
                            <font-awesome-icon  icon="globe"/>
                            <font-awesome-icon :icon="['fab','github']"/>
                        </p>
                   </div>
                
                </div>
            </swiper-slide>
        
        </swiper>
    </div>
       
        
   
</template>

<script>
   
    import {EffectCube, Navigation, Pagination} from 'swiper/modules' 
    import {Swiper, SwiperSlide } from 'swiper/vue';
   
    import 'swiper/css'
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/effect-cube'
   
    import image1 from '@/assets/images/portfolio.png'
    import image2 from '@/assets/images/free-image.png'
    import image3 from '@/assets/images/weather.png'
   
  

    export default{
        name:'MyPortfolio',

        components:{
          Swiper,
          SwiperSlide
        },
        data(){
            return{
                pictures:[
                    {src:image1, alt:'angular', title:'MyPortfolio', bg:'bg-red-500',tech:'VueJs + Tailwind css'},
                    {src:image2, alt:'node', title:'FreeImage', bg:'bg-green-600',tech:'Angular + Tailwind css + Rest API'},
                    {src:image3, alt:'react', title:'WeatherApp', bg:'bg-gray-800',tech:'VueJs + Tailwind css + Rest API'},
                    
                ],
                modules:[Navigation, Pagination, EffectCube]
            }
        },
        methods:{
            showMessage(){
                
            }
        }
    
    }
</script>

<style scoped>
    .my-swiper{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>