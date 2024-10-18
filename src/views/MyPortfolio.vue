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
                        <h5 class="text-xl italic">{{ picture.tech }}</h5>
                        <p>{{ picture.description }}</p>
                        <p class="flex space-x-5 text-2xl mt-5">
                            <a :href="picture.linkDep" target="_blank" ><font-awesome-icon  icon="globe"/></a>
                            <a :href="picture.linkGit" target="_blank"><font-awesome-icon :icon="['fab','github']"/></a>
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
                    {src:image1, alt:'angular', title:'MyPortfolio', bg:'bg-red-500',
                    tech:'VueJs + Tailwind css',linkDep:'https://aina-sebastien.vercel.app/#portfolio',
                     linkGit:'https://github.com/Ainasebastien56/Portfolio.git',
                      description:'An interactive and responsive website designed to showcase my skills and experiences, featuring smooth navigation and unique 3D animations.'
                    },
                   
                   
                    {src:image2, alt:'node', title:'FreeImage', bg:'bg-green-600',
                    tech:'Angular + Tailwind css + Rest API',linkDep:'https://free-image.vercel.app/',
                    linkGit:'https://github.com/Ainasebastien56/free-image.git',
                    description:'A web application that allows users to search and download high-quality images, integrated with the Pixabay API to provide a wide range of free visual content.'
                   

                    },
                    {src:image3, alt:'react', title:'WeatherApp', bg:'bg-gray-800',
                    tech:'Angular + Tailwind css + Rest API', linkDep:'https://weather-seven-liart.vercel.app/home',
                    linkGit:'https://github.com/Ainasebastien56/Weather.git',
                    description:'A tool that displays weather forecasts for different countries, offering detailed multi-day predictions, integrated with WeatherAPI and OpenWeatherMap'
                    },
                    
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