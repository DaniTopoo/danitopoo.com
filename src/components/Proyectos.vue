<template>
    <div class="text-center text-3xl text-headers">PROJECTS</div>
    <div class="flex gap-3 ml-14">
    <a 
    target="_blank"
    href="https://github.com/DaniTopoo/spotify-fullstack"
    class="bg-white rounded-lg shadow-lg p-8 text-center hover:bg-gray-200 border border-black overflow-hidden slide-in increase-size">
    <SpotifyIcon class="w-32 h-32 rounded-full mx-auto mb-4"/>
    <h2 class="text-xl font-bold mb-2">Clon Spotify</h2>
    <p class="text-principal">Clon de Spotify aplicación web con sus funcionalidades y vistas realizado con 
        <span class="font-bold text-black">vue 3 y TailwindCSS</span> 
     </p>
  </a>
</div>
</template>
<script setup>
import SpotifyIcon from "/src/components/iconics/SpotifyIcon.vue";
</script>