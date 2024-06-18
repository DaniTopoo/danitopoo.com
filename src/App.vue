
<template>
  <div :class="{ 'dark': isDarkMode }" class="h-screen w-screen overflow-hidden bg-slate-100 dark:bg-[#262626]">
      <label class="switch fixed top-4 left-4">
        <span class="sun"><SunIcon/></span>
        <span class="moon"><MoonIcon/></span>
        <input type="checkbox" class="input" :checked="isDarkMode" @change="toggleDarkMode">
        <span class="slider"></span>
      </label>
    <principal/>
  </div>
</template>

<script setup>
import principal from './components/principal.vue';
import SunIcon from './components/iconics/SunIcon.vue';
import MoonIcon from './components/iconics/MoonIcon.vue';
import { ref, watchEffect } from 'vue';

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

// Asegurar que la clase 'dark' se aplica a la etiqueta <html>
watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>
