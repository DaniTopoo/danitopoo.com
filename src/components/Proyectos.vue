<template>
  <div class="p-4">
    <div class="text-center text-2xl md:text-3xl text-principal mb-6 dark:text-white">
      PROJECTS
    </div>
    <div
      class="flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 justify-center items-center"
    >
      <a
        target="_blank"
        href="https://github.com/DaniTopoo/spotify-fullstack"
        class="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center
       hover:bg-gray-200 border border-black overflow-hidden 
       dark:hover:bg-[#444]
       dark:text-white
        slide-in increase-size w-full md:w-auto dark:bg-[#666]"
      >
        <SpotifyIcon
          class="w-16 h-16 md:w-32 md:h-32 rounded-full mx-auto mb-4"
        />
        <h2 class="text-lg md:text-xl font-bold mb-2">Clon Spotify</h2>
        <p class="text-principal text-sm md:text-base dark:text-white
        ">
          Clon de Spotify aplicación web con sus funcionalidades y vistas
          realizado con
          <span class="font-bold text-black">Vue 3 y TailwindCSS</span>
        </p>
      </a>
    </div>
  </div>
</template>
<script setup>
import SpotifyIcon from "/src/components/iconics/SpotifyIcon.vue";
</script>
