<template>
  <div class="absolute -left-24 -top-8">
    <div
      class="w-[480px] h-[471px] rounded-full bg-[#324E7B]/20 blur-[62px] shadow-[0_4px_62px_50px_rgba(50,78,123,0.2)]"
    ></div>
  </div>
  <Header />
  <div class="container flex justify-between gap-[107px] mt-[123px]">
    <div class="flex flex-col gap-y-9">
      <div class="flex flex-col gap-y-2">
        <h1 class="poppins-bold text-black text-5xl leading-[72px]">
          Your Next Opportunity Starts With a <span class="text-[#324E7B]">Better Resume</span>
        </h1>
        <p class="poppins-medium text-base text-[#747474]">
          Build a polished, job-winning resume with ease. Choose from professionally designed
          templates, customize every section, and download a professional PDF ready to share with
          employers.
        </p>
      </div>
      <div class="flex items-center gap-6">
        <ButtonStyle link="/CreateCV" type="default">Build Your Resume Now</ButtonStyle>
        <ButtonStyle link="/Templates" type="white">Use Templates</ButtonStyle>
      </div>
    </div>
    <img src="@/assets/illustrate.svg" alt="" />
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
