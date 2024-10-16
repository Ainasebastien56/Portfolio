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
                  <a @click="setActive('story')" :class="isActive ==='story'?'text-white':''" class="text-gray-600 transition-all transition-500 ease-in-out border-0">MY STORY</a>
                  <a @click="setActive('experience')" :class="isActive ==='experience'?'text-white':''" class="text-gray-600 transition-all transition-500 ease-in-out border-0">EXPERIENCE</a>
                  <a @click="setActive('education')" :class="isActive ==='education'?'text-white':''" class="text-gray-600 transition-all transition-500 ease-in-out border-0">EDUCATION</a>
              </div>
 
              <div class="text-justify text-gray-200 ">
                  <div class="leading-normal text-md md:text-lg" v-show="isActive === 'story'" :class="isActive?'section':''">
                    <p class="mb-5">I'm <span class="font-bold">Sébastien,</span>
                      a passionate web developer with a deep love for creating dynamic and engaging
                      applications. My journey in technology began with fascination for coding, and i have since
                      specialized in JavaScript frameworks like <span class=" font-semibold italic">Angular, React and Vue.js</span>
                    </p>
                    <p class="mb-5">
                      While I consider
                      myself an expert in front-end development, i am also adaptable and capable of working
                      in a Full Stack environment.
                    </p>

                    <p class="mb-5">
                      My philosophy is simple: no matter the obstacles i face, i always rise to the challenge
                      and give my all in everything i do. This resilience drives me to continously grow as a developer.
                      I focus on creating responsive applications with appealing designs that offer seamless user experiences.
                    </p>
                     
                    <p class="mb-5">
                      When i'm not coding, you can find me diving into the latest tech trends. I believe that learning is a lifelong
                      journey, and i am excided about what the future holds.
                    </p>
                  </div>

                  <div v-show="isActive === 'experience'" :class="isActive?'section':''">
                    <h2 class="text-lg md:text-xl font-semibold leading-loose">FullStack Developer (Internship)</h2>
                    <h3 class="mb-5 text-md">CNaPS | Mai - August 2023  </h3>
                    <ul class="leading-loose">
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Development of a web application for managing National Health Coverage.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Development of the front-end and back-end using Angular and Spring Boot.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Creating RESTful services.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Implementation of business logic.</li>
                      <li> <font-awesome-icon class="mr-5" icon="check-circle"/>Storage and management of data using Oracle Database.</li>
                    </ul>
                  </div>

                  <div v-show="isActive === 'education'" :class="isActive?'section':''">
                    <div class="mb-10">
                      <h2 class="text-lg md:text-xl font-semibold" >• Currently pursuing a Master's degree (Year 2) in Electronics, Computer Systems, and Artifical Intelligence</h2>
                      <h3 class="text-md"> Institut Supérieur Polytechnique de Madagascar (I.S.P.M) | 2023 - 2024</h3>
                    </div>

                    <div >
                      <h2 class="text-lg md:text-xl font-semibold" >• Bachelor's degree in Electronics, Computer Systems, and Artifical Intelligence</h2>
                      <h3 class=""> Institut Supérieur Polytechnique de Madagascar (I.S.P.M) | 2022 - 2023</h3>
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

