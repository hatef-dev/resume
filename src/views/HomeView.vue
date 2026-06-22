<template>
  <div class="absolute -left-24 -top-8">
    <div
      class="w-[480px] h-[471px] rounded-full bg-[#324E7B]/20 blur-[62px] shadow-[0_4px_62px_50px_rgba(50,78,123,0.2)]"
    ></div>
  </div>
  <Header />
  <div class="home"></div>
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
