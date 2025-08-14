<template>
    <nav :class="isScroll?'bg-gray-400 text-white': 'bg-black'" class="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-2">
      <div class="w-full flex items-center justify-between">
            <div>
            <img class="w-10 " src="@/assets/logo.png" alt="logo">
          </div>

          <div class="md:hidden">
            <button  @click="isOpen= !isOpen">
              <font-awesome-icon  v-if="!isOpen" class="text-white text-2xl transition-all duration 500 ease-in-out" icon="bars"/>
              <font-awesome-icon  v-if="isOpen"  class="text-white text-2xl transition-all duration 500 ease-in-out" icon="xmark"/>
            </button>
           
          </div>
      </div> 
      
        <div :class="!isOpen?'translate-x-full' : 'translate-x-0'" class="bg-white md:bg-transparent rounded-l-lg fixed top-20 right-0 md:static w-auto md:w-full  flex flex-col  md:justify-end md:flex-row md:translate-x-0 transition duration-500 ease-in-out py-10 md:py-0 px-2 md:px-0 items-center md:items-end">
          <a @click="setActive('home')" :class="activeItem === 'home'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2  text-gray-900 mb-2 md:mb-0" href="#">Home</a>
          <a @click="setActive('portfolio')" :class="activeItem === 'portfolio'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2 text-gray-900 mb-2 md:mb-0 " href="#">Portfolio</a>
          <a @click="setActive('about')" :class="activeItem === 'about'? 'text-gray-900 md:text-white underline transition-all duration 500 ease-in-out':''" class="mx-2 text-gray-900 mb-2 md:mb-0" href="#">About Me</a>
        </div>
    </nav>
</template>

<script>

  export default{
    name:'NavBar',
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

<style>

</style>