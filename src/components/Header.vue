<template>
  <div class="container relative mt-[59px]">
    <nav class="flex justify-between items-center poppins-medium text-base">
      <div>
        <a class="group inline-flex min-h-11 items-center" href="/">
          <img src="/tinycv_logo.webp" class="w-28 h-full" />
        </a>
      </div>
      <ul class="flex items-center gap-24">
        <li class="">
          <router-link to="/">Home</router-link>
        </li>
        <li class="">
          <router-link to="/Templates">Templates</router-link>
        </li>
        <li class="">
          <router-link to="/AboutUs">About Us</router-link>
        </li>
        <li class="">
          <router-link to="/FAQ">FAQs</router-link>
        </li>
      </ul>
      <ButtonStyle link="/CreateCV" type="default">Create your CV</ButtonStyle>
    </nav>
  </div>
</template>
