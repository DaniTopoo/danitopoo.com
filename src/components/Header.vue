<template>
        <div class="flex justify-between items-center">
      <div 
      class="m-12 flex items-center gap-6">
      <img 
      class="w-[200px] h-[200px]"
      src="https://i.pinimg.com/236x/1c/34/f5/1c34f56f74d75590863dd8a3ae8d15a4.jpg" 
      alt="Imagen" >
    <div class="flex flex-col">
        <span class="text-principal text-2xl">Hi, i'm</span>
        <span class="font-bold text-2xl">DaniTopoo</span>
        <span class="text-principal text-2xl">Junior FrontEnd</span>
        <div class="mt-6">
        <a 
        target="_blank"
        class="bg-black border border-black p-6 rounded-xl mr-2"
        href="https://www.linkedin.com/in/daniel-roberto-ruiz-352990196/?trk=opento_sprofile_goalscard">
            <LinkedinIcon class="h-6 w-6 inline-block fill-gray-100"/>
        </a>
        <a 
        target="_blank"
        class="bg-gray-100 border border-black p-6 rounded-xl"  
        href="https://github.com/DaniTopoo">
            <GitHubIcon class="h-6 w-6 inline-block fill-black"/>
        </a>
      </div>
    </div>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-2 gap-3 text-2xl gap-y-11">
            <div
            class="flex items-center gap-3 slide-in"
            v-for="(tecnologia,i) in tecnologias"
            :style="{
                '--order': i
            }"
            >
            <span>{{ tecnologia.name }}</span>
            <component 
            class="h-6 w-6"
            :is="tecnologia.icon"/>
            </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import GitHubIcon from "/src/components/iconics/GitHubIcon.vue";
import LinkedinIcon from "/src/components/iconics/LinkedinIcon.vue";
import VueIcon from '/src/components/iconics/VueIcon.vue';
import JsIcon from '/src/components/iconics/JsIcon.vue';
import TailwindIcon from '/src/components/iconics/TailwindIcon.vue';
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
];

</script>