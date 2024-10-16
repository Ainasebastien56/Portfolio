<template>
    <div class="py-10 flex flex-col items-center justify-center bg-purple-700  text-white  px-5 md:px-10 py-2">
        <div class="w-full flex items-center justify-center">
            <h1 class="text-7xl md:text-8xl font-semibold bg-gradient-to-b from-white to-white/25 bg-clip-text text-transparent tracking-widest text-center mb-5">MY SKILLS</h1>
        </div>
       <div class=" w-10/12 flex flex-col justify-center">
            <h3 class="w-10/12 text-xl font-semibold">Langage & Framework</h3>
            <div class="grid  justify-items-center grid-cols-3 gap-5  py-10">
                <div  v-for="tech in technologies" :key="tech.id" class="flex flex-col items-center">
                    <img class="w-12 h-12 text-white" :src="tech.src" alt="image">
                    <p>{{ tech.name }}</p>
                </div>
                
            </div>
       </div> 

       <div class=" w-10/12 flex flex-col  justify-center mt-5">
            <h3 class=" w-10/12 text-xl font-semibold">Tools</h3>
            <div class="grid  justify-items-center grid-cols-3 gap-4  py-10">
                <div v-for="tool in tools" :key="tool.id" class="flex flex-col items-center">
                    <img class="w-12 h-12 text-white" :src="tool.src" alt="image">
                    <p>{{ tool.name }}</p>
                </div>
                
            </div>
       </div> 
       
    </div>
</template>

<script>
import angular from '@/assets/svg/angular.svg';
import git from  '@/assets/images/git.svg';
import github from '@/assets/images/github.svg';
import javascript from '@/assets/svg/javascript.svg';
import nodejs from '@/assets/svg/nodejs.svg';
import react from '@/assets/svg/react-js.svg';
import vuejs from '@/assets/svg/vuejs.svg';
import typescript from '@/assets/svg/typescript.svg';
import tailwind from '@/assets/svg/tailwind.svg';
import css from '@/assets/svg/css.svg';
import html from '@/assets/svg/html5.svg';
import figma from '@/assets/svg/figma.svg';
import express from '@/assets/svg/express.svg';
import spring from '@/assets/svg/spring-boot.svg'

    export default{
        name:'MySkills',

       data(){
        return{
            technologies:[
            {id:1, src:angular, name:'Angular'},
            {id:2, src:javascript, name:'JavaScript'},
            {id:3, src:react, name:'React'},
            {id:4, src:vuejs, name:'Vue.js'},
            {id:5, src:typescript, name:'TypeScript'},
            {id:6, src:tailwind, name:'Tailwindcss'},
            {id:7, src:css, name:'CSS'},
            {id:8, src:html, name:'HTML'},
            {id:9, src:express, name:'Express.js'},
            {id:10, src:spring, name:'SpringBoot'},
            {id:11, src:nodejs, name:'Node.js'},

            ],
            tools:[
            {id:1, src:git, name:'Git'},
            {id:2, src:github, name:'GitHub'},
            {id:3, src:figma, name:'Figma'}
            ]
        }
       },
       methods:{
    
       } 
    }
</script>

<style scoped>
</style>
