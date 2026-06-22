<template>
  <div class="">
    <router-link
      :to="link"
      class="rounded-full px-[35px] py-[18px] flex justify-center items-center poppins-semibold text-base"
      :class="{
        'bg-transparent text-black border-2 border-[#324E7B]': type === 'white',
        'bg-[#324E7B] text-white': type === 'default',
      }"
    >
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ButtonStyle",
  props: {
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "default",
    },
  },
  computed: {},
};
</script>
