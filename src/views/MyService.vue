<template>
    <div class="w-full flex flex-col justify-center items-center  bg-gradient-to-b from-purple-700 py-20 -mt-10 z-30 rounded-xl">

        <div class="w-full flex items-center justify-center">
            <h1 class="text-7xl md:text-8xl font-semibold bg-gradient-to-b from-white to-white/25 bg-clip-text text-transparent tracking-widest text-center mb-5">MY SERVICES</h1>
        </div>

        <div class="w-full flex flex-wrap items-center justify-between space-y-5 px-5 ">
            <div class="rounded w-full sm:w-4/6 md:w-80 h-80 flex flex-col bg-white bg-opacity-80 text-justify p-5 shadow-lg hover:scale-110">
            <div>
                <font-awesome-icon icon="code" class="bg-yellow-600 text-white p-2" />
            </div>
            <div>
                <h3 class="font-semibold text-lg">Front-End Development</h3>
                <p class="text-sm">I create modern, interactive, and high-performance 
                    user interfaces using technologies such as <span class="font-semibold">Angular</span>,
                    <span class="font-semibold">React</span>, <span class="font-semibold">Vue.js</span>
                    
                </p>
                <p class="mt-5">
                    <span class="font-semibold">Technologies:</span> HTML, CSS, JavaScript,
                        TypeScript, Tailwind CSS
                    
                    
                </p>
            </div>
        </div>
        <div class="rounded w-full sm:w-4/6 md:w-80 h-80 flex flex-col bg-white bg-opacity-80 text-justify p-5 shadow-lg hover:scale-110">
                <div>
                    <font-awesome-icon icon="server" class="bg-yellow-300 text-white p-2" />
                </div>
                <div>
                    <h3 class="font-semibold text-lg">Backend Development</h3>
                    <p class="text-sm">
                        I develop business logic and manage databases
                        to build robust web applications. My skills include creating APIs and
                        server management
                    </p>
                    <p class="mt-5">
                    <span class="font-semibold ">Technologies:</span>
                    Node.js, Express, Spring Boot, Mysql, Oracle Database
                    </p>
                </div>
        </div>

        <div class="rounded w-full sm:w-4/6 md:w-80 h-80 flex flex-col bg-white bg-opacity-80 text-justify p-5 shadow-lg hover:scale-110">
            <div>
                <font-awesome-icon icon="th" class="bg-purple-600 text-white p-2" />
            </div>
            <div>
                <h3 class="font-semibold text-lg">Responsice Design</h3>
                <p class="text-sm">
                    I develop interfaces that adapt perfectly to all
                    device types (desktop, tablets, mobile phones). I use 
                    responsive design techniques and modern frameworks to ensure
                    a consistent experience
                </p>
                <p class="mt-5">
                    <span class="font-semibold">Tools:</span>
                    Tailwind CSS, Flexbox, CSS Grid
                </p>
            </div>
        </div>
        
        <div class="rounded  w-full sm:w-4/6 md:w-80 h-80  flex flex-col bg-white bg-opacity-80 text-justify p-5 shadow-lg hover:scale-110">
            <div>
                <font-awesome-icon icon="cloud" class="bg-red-500 text-white p-2" />
            </div>
            <div>
                <h3 class="font-semibold text-lg">RESTful APIs</h3>
                <p class="text-sm">
                    I design efficient RESTful APIs to enable seamless
                    communication between different parts of your applications.
                    My APIs are secure, scalable, and well documented.
                </p>
                <p class="mt-5">
                    <span class="font-semibold">Standars:</span>
                    CRUD operations, JWT for authentification, error handling.
                </p>
            </div>
        </div>
        </div>
        

    </div>
</template>

<script>
    export default{
        name:'MyService'
    }
</script>

<style scoped>

.title{
  font-size: 100px;

}
</style>