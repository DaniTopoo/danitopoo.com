<template>
  <div class="flex flex-col md:flex-row justify-evenly items-center p-4 md:p-12 slide-in">
    <div class="flex flex-col md:flex-row items-center gap-6">
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <span class="text-principal text-lg md:text-2xl dark:text-white">Hi, I'm</span>
        <span class="font-bold text-lg md:text-2xl dark:text-gray-300">DaniTopoo</span>
        <span class="text-principal text-lg md:text-2xl dark:text-white">Junior FrontEnd</span>
        <div class="mt-4 md:mt-6 flex gap-2">
          <a 
            target="_blank"
            class="bg-black border border-black p-2 md:p-6 rounded-xl"
            href="https://www.linkedin.com/in/daniel-roberto-ruiz-352990196/?trk=opento_sprofile_goalscard">
            <LinkedinIcon class="h-5 w-5 md:h-8 md:w-8 inline-block fill-gray-100"/>
          </a>
          <a 
            target="_blank"
            class="bg-gray-100 border border-black p-2 md:p-6 rounded-xl"  
            href="https://github.com/DaniTopoo">
            <GitHubIcon class="h-5 w-5 md:h-8 md:w-8 inline-block fill-black"/>
          </a>
          <a 
            target="_blank"
            class="bg-black border border-black p-2 md:p-6 rounded-xl"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=danitopoodev@gmail.com">
            <EmailIcon class="h-5 w-5 md:h-8 md:w-8 inline-block fill-gray-100"/>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-6 md:mt-12 w-full md:w-auto flex justify-center">
      <div class=" gap-3 md:gap-3 text-lg md:text-2xl gap-y-4 md:gap-y-11">
        <div
          class="flex flex-col items-center gap-2 md:gap-3 slide-in"
          v-for="(tecnologia, i) in tecnologias"
          :style="{ '--order': i }"
          :key="i"
        >
        <div class="flex items-center gap-3 p-1">
          <span class="dark:text-white">{{ tecnologia.name }}</span>
          <component 
            class="h-4 w-4 md:h-6 md:w-6 dark:fill-white"
            :is="tecnologia.icon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GitHubIcon from "/src/components/iconics/GitHubIcon.vue";
import LinkedinIcon from "/src/components/iconics/LinkedinIcon.vue";
import VueIcon from '/src/components/iconics/VueIcon.vue';
import ReactIcon from "./iconics/ReactIcon.vue";
import JsIcon from '/src/components/iconics/JsIcon.vue';
import TailwindIcon from '/src/components/iconics/TailwindIcon.vue';
import EmailIcon from "./iconics/EmailIcon.vue";
const tecnologias = [
  {
    name: "Vue Composition API",
    icon: VueIcon
  },
  {
    name: "Vue Router",
    icon: VueIcon
  },
  {
  name: 'JavaScript',
  icon: JsIcon
    
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon
  },
  {
    name: "React",
    icon: ReactIcon
  }
];

</script>