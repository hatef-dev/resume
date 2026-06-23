<template>
  <div class="absolute -left-24 -top-8">
    <div
      class="w-[480px] h-[471px] rounded-full bg-[#324E7B]/20 dark:bg-[#324E7B]/30 blur-[62px] shadow-[0_4px_62px_50px_rgba(50,78,123,0.2)]"
    ></div>
  </div>
  <Header />
  <div
    class="container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-[107px] mt-20 lg:mt-[123px] px-4 lg:px-0"
  >
    <div class="flex flex-col gap-y-9 max-w-2xl text-center lg:text-left">
      <div class="flex flex-col gap-y-2">
        <h1
          class="poppins-bold text-black dark:text-white text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[72px]"
        >
          Your Next Opportunity Starts With a <span class="text-[#324E7B]">Better Resume</span>
        </h1>
        <p class="poppins-medium text-base text-[#747474] dark:text-gray-400 mt-4">
          Build a polished, job-winning resume with ease. Choose from professionally designed
          templates, customize every section, and download a professional PDF ready to share with
          employers.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
        <ButtonStyle link="/CreateCV" type="default">Build Your Resume Now</ButtonStyle>
        <ButtonStyle link="/Templates" type="white">Use Templates</ButtonStyle>
      </div>
    </div>
    <img
      src="@/assets/illustrate.svg"
      alt="Resume illustration"
      class="w-full max-w-md lg:max-w-none order-first lg:order-last"
    />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "HomeView",
  components: {
    Header,
  },
};
</script>
