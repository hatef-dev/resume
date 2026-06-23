<template>
  <div class="container relative pt-[59px]">
    <nav class="flex justify-between items-center poppins-medium text-base">
      <!-- Logo -->
      <div>
        <a class="group inline-flex min-h-11 items-center" href="/">
          <img src="/tinycv_logo.webp" class="w-28 h-full" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-16 lg:gap-24">
        <li>
          <router-link to="/" class="text-gray-800 dark:text-gray-200">Home</router-link>
        </li>
        <li>
          <router-link to="/Templates" class="text-gray-800 dark:text-gray-200"
            >Templates</router-link
          >
        </li>
        <li>
          <router-link to="/AboutUs" class="text-gray-800 dark:text-gray-200">About Us</router-link>
        </li>
        <li>
          <router-link to="/FAQ" class="text-gray-800 dark:text-gray-200">FAQs</router-link>
        </li>
      </ul>
      <div class="hidden md:flex items-center gap-4">
        <button
          @click="themeStore.toggleTheme"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          <svg
            v-if="!themeStore.isDark"
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <ButtonStyle link="/CreateCV" type="default">Create your CV</ButtonStyle>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          @click="themeStore.toggleTheme"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          <svg
            v-if="!themeStore.isDark"
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button
          class="p-2"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 md:hidden"
      >
        <ul class="flex flex-col gap-4 mb-6">
          <li>
            <router-link
              to="/"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-gray-800 dark:text-gray-200"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/Templates"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-gray-800 dark:text-gray-200"
              >Templates</router-link
            >
          </li>
          <li>
            <router-link
              to="/AboutUs"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-gray-800 dark:text-gray-200"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/FAQ"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-gray-800 dark:text-gray-200"
              >FAQs</router-link
            >
          </li>
        </ul>
        <ButtonStyle
          link="/CreateCV"
          type="default"
          class="w-full justify-center"
          @click="isMobileMenuOpen = false"
          >Create your CV</ButtonStyle
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();
const isMobileMenuOpen = ref(false);
</script>
