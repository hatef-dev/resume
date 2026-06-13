<template>
  <Container>
    <div class="grid-cols-3 md:block">
      <aside class="col-span-1">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800"
        >
          Markdown
        </h3>
      </aside>
      <aside class="col-span-2"></aside>
    </div>
  </Container>
</template>

<script>
import AppContainer from "./components/Container.vue";

export default {
  components: { Container: AppContainer },
};
</script>
