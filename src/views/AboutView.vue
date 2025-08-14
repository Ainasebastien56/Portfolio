<template>
  <div class="about text-black px-5 md:px-10 py-10 flex flex-col items-center bg-black md:my-0">
      <div class=" w-full relative">
          <h2 class="w-full  text-7xl md:text-8xl font-semibold bg-gradient-to-b from-white to-white/25 bg-clip-text text-transparent tracking-widest text-center leading-none mb-5 md:mb-0">ABOUT ME </h2>
        
      </div>

      <div class="w-full h-full flex flex-col md:flex-row justify-between py-10">
          <div class="image w-full h-full  md:w-2/5 flex px-5">
            <img class="w-full  flex-shrink shadow-lg rounded" src="@/assets/images/aina.jpg" alt="">
          </div>

          <div class="section w-full h-full md:w-3/5 text-white flex flex-col px-5  py-10 md:py-0">
              <div class="navigation text-md md:text-lg mb-10 w-full  justify-center md:justify-start  items-center space-x-5 md:space-x-20 border-b-2 border-white  pb-5 ">
                  <a @click="setActive('story')" :class="isActive ==='story'?'text-white':''" class="text-gray-400 transition-all transition-500 ease-in-out border-0">MY STORY</a>
                  <a @click="setActive('experience')" :class="isActive ==='experience'?'text-white':''" class="text-gray-400 transition-all transition-500 ease-in-out border-0">EXPERIENCE</a>
                  <a @click="setActive('education')" :class="isActive ==='education'?'text-white':''" class="text-gray-400 transition-all transition-500 ease-in-out border-0">EDUCATION</a>
              </div>
 
              <div class="text-justify text-gray-200 ">
                  <div class="leading-normal text-md md:text-lg" v-show="isActive === 'story'" :class="isActive?'section':''">
                    <p class="mb-5">I'm <span class="font-bold">Sébastien,</span>
                      a Front-End Developer specializing in Angular and Vue.js, 
                      focused on building dynamic, responsive, and user-friendly web applications.
                      I have experience in Full-Stack development from my internship, which helps 
                      me collaborate effectively with backend teams. I’m passionate about creating
                       interfaces that are both visually appealing and optimized for all devices.
                    </p>
                  </div>

                  <div v-show="isActive === 'experience'" :class="isActive?'section':''">
                    <h2 class="text-lg md:text-xl font-semibold leading-loose">FullStack Developer (Internship)</h2>
                    <h3 class="mb-5 text-md">CNaPS | Mai - August 2023  </h3>
                    <ul class="leading-loose">
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Developed a web app for National Health Coverage management.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Front-end with Angular (responsive design) & back-end with Spring Boot.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Created RESTful services and implemented business logic.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Managed data using Oracle Database.</li>
                    </ul>
                  </div>

                  <div v-show="isActive === 'education'" :class="isActive?'section':''">
                    <div class="mb-10">
                      <h2 class="text-lg md:text-xl font-semibold" >• MSc in Artificial Intelligence with Machine Learning</h2>
                      <h3 class="text-md"> University of Technology, Mauritius | Avril 2025 - Present</h3>
                    </div>

                    <div >
                      <h2 class="text-lg md:text-xl font-semibold" >• Bachelor's in Electronics, Computer Systems, and AI</h2>
                      <h3 class=""> Institut Supérieur Polytechnique de Madagascar (I.S.P.M) | 2019 - 2023</h3>
                    </div>           
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:'AbouView',
    
    data(){
      return{
          isActive:'story'
      }
    },

    methods:{
      setActive(item){
          this.isActive = item;
      }
    }
  }
  
</script>

<style>
.title{
  font-size: 100px;

}

.mobile-title{
  font-size: 50px;
}

.section{
  animation: slideDown 2s ease-in-out;
}

@keyframes slideDown{
  0%{
      transform: translateX(200px);
      opacity:0;
  }
  100%{
    transform: translateX(0);
    opacity:1;
  }
}

.reveal{
  opacity: 0;
  transform: translateY(30px);
}

.reveal-visible{
  opacity: 1;
  transform: translateY(0);
  transition: 1s;
}

</style>

