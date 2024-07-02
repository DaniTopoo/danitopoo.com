<template>
  <div class="p-4 flex-1">
    <div class="text-center text-2xl md:text-3xl text-principal mb-6 dark:text-white">
      PROJECTS
    </div>
    <div
      class="flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 justify-center items-center max-w-xl mx-auto p-4 break-words"
    >
      <a
        target="_blank"
        href="https://github.com/DaniTopoo/spotify-fullstack"
        class="bg-white rounded-lg shadow-lg p-4 md:p-8 text-center
       hover:bg-gray-200 border border-black overflow-hidden 
       dark:hover:bg-[#323233]
       dark:text-white
        slide-in increase-size w-full md:w-auto dark:bg-[#404040]"
      >
        <SpotifyIcon
          class="w-16 h-16 md:w-32 md:h-32 rounded-full mx-auto mb-4 dark:fill-white"
        />
        <h2 class="text-lg md:text-xl font-bold mb-2">Clon Spotify</h2>
        <p class="text-principal text-sm md:text-base dark:text-[#A6A6A6]
        ">
        I have developed a front-end clone of Spotify using <span class="text-black">Vue 3</span> and <span class="text-black">Tailwind CSS</span>. 
        This project replicates the core functionalities and user interface of Spotify, 
        providing a smooth and responsive user experience. The application includes features such as navigation, 
        music playback controls, playlists,
        all styled with the modern and flexible design system provided by Tailwind CSS.
         
        </p>
      </a>
    </div>
  </div>
</template>
<script setup>
import SpotifyIcon from "/src/components/iconics/SpotifyIcon.vue";
</script>
