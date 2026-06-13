<template>
  <Container>
    <div class="block grid-cols-3 md:grid">
      <aside class="col-span-1 w-full overflow-hidden">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800"
        >
          Markdown source
        </h3>
        <div class="overflow-y-auto rounded-2xl bg-[#F8F9FB]">
          <textarea
            name="markdownSource"
            id=""
            class="w-full border-0 focus:outline-none min-h-[32rem] flex-1 resize-none bg-transparent px-5 py-5 font-mono text-[0.98rem] leading-7 text-slate-900 outline-none"
          ></textarea>
        </div>
      </aside>
      <aside class="col-span-2">
        <div class="w-full h-full bg-slate-100"></div>
      </aside>
    </div>
  </Container>
</template>

<script>
import AppContainer from "./components/Container.vue";

export default {
  components: { Container: AppContainer },
};
</script>
