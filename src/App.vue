<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
    <router-view :key="$route.path" />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});

onUnmounted(() => {
  themeStore.cleanup();
});
</script>
