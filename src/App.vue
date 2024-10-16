<template>
  <div class="overflow-hidden">
    <nav :class="isScroll?'text-black bg-opacity-60 bg-white ': 'text-white'" class="fixed z-30 top-0 left-0 w-full  flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-2">
      <div class="w-full flex items-center justify-between">
            <div>
            <img class="w-10 " src="@/assets/logo.png" alt="logo">
          </div>

          <div class="md:hidden">
            <button  @click="isOpen= !isOpen">
              <font-awesome-icon  v-if="!isOpen"  class=" text-2xl transition-all duration 500 ease-in-out" icon="bars"/>
              <font-awesome-icon  v-if="isOpen"  class=" text-2xl transition-all duration 500 ease-in-out" icon="xmark"/>
            </button>
           
          </div>
      </div> 
      
        <div :class="!isOpen?'translate-x-full' : 'translate-x-0'" class="bg-white md:bg-transparent rounded-l-lg fixed top-20 right-0 md:static w-auto md:w-full  flex flex-col  md:justify-end md:flex-row md:translate-x-0 transition duration-500 ease-in-out py-10 md:py-0 px-2 md:px-0 items-center md:items-end text-md md:text-lg ">
          <a  @click="setActive('home')" :class="activeItem === 'home'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2  text-gray-500  mb-2 md:mb-0" href="#home">Home</a>
          <a @click="setActive('portfolio')" :class="activeItem === 'portfolio'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2 text-gray-500 mb-2 md:mb-0 " href="#portfolio">Portfolio</a>
          <a @click="setActive('about')" :class="activeItem === 'about'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2 text-gray-500 mb-2 md:mb-0" href="#about">About Me</a>
          <a @click="setActive('skill')" :class="activeItem === 'skill'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2 text-gray-500 mb-2 md:mb-0" href="#skills">Skills</a>
        </div>
    </nav>
  <div id="home">
    <HomeView/>
  </div>

  <div id="">
    <MyService/>
  </div>

  <div id="about">
    <AboutView/>
  </div>

  <div id="portfolio" class="mb-10">
    <MyPortfolio/>
  </div>

  <div class="">
    <MyFooter/>
  </div>
  </div>
   
</template>

<script>

import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import MyService from './views/MyService.vue';
import MyPortfolio from './views/MyPortfolio.vue';
import MyFooter from './components/MyFooter.vue';



  export default{
    components:{
      HomeView,
      AboutView,
      MyService,
      MyPortfolio,
      MyFooter
    },
    data(){
    
    return{
      activeItem:'home',
      isOpen:false,
      isScroll: false
    }
},
mounted(){
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 30){
        this.isScroll = true;
      }
      else{
        this.isScroll = false;
      }
    })
},

methods:{
  setActive(item){
    this.activeItem = item;
  }

}
  }
</script>

<style scoped>
  
  .background{
    background-color: #E3E3E3;
  }
</style>
