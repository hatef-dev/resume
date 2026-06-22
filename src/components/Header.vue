<template>
  <div class="container relative mt-[59px]">
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
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Templates">Templates</router-link>
        </li>
        <li>
          <router-link to="/AboutUs">About Us</router-link>
        </li>
        <li>
          <router-link to="/FAQ">FAQs</router-link>
        </li>
      </ul>
      <ButtonStyle link="/CreateCV" type="default" class="hidden md:inline-flex"
        >Create your CV</ButtonStyle
      >

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <!-- Mobile Navigation Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 mt-4 bg-white shadow-lg rounded-lg p-6 md:hidden"
      >
        <ul class="flex flex-col gap-4 mb-6">
          <li>
            <router-link to="/" @click="isMobileMenuOpen = false" class="block py-2"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/Templates" @click="isMobileMenuOpen = false" class="block py-2"
              >Templates</router-link
            >
          </li>
          <li>
            <router-link to="/AboutUs" @click="isMobileMenuOpen = false" class="block py-2"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link to="/FAQ" @click="isMobileMenuOpen = false" class="block py-2"
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

const isMobileMenuOpen = ref(false);
</script>
