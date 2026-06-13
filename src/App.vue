<template>
  <Container>
    <div class="block grid-cols-3 gap-x-3 md:grid">
      <aside class="col-span-1 w-full overflow-hidden">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800"
        >
          Markdown source
        </h3>
        <div class="overflow-y-auto rounded-2xl bg-[#F8F9FB]">
          <textarea
            v-model="markdownSource"
            name="markdownSource"
            id=""
            class="w-full border-0 focus:outline-none min-h-[32rem] flex-1 resize-none bg-transparent px-5 py-5 font-mono text-[0.98rem] leading-7 text-slate-900 outline-none"
          ></textarea>
        </div>
      </aside>
      <aside class="col-span-2 bg-white p-10 rounded-xl">
        <div v-for="(section, i) in sections" :key="i">
          <!-- HEADER -->
          <div v-if="section.type === 'header'">
            <h1 class="text-4xl font-bold">
              {{ section.title }}
            </h1>

            <p class="text-lg text-gray-600 mt-1">
              {{ section.role }}
            </p>

            <div class="flex gap-4 mt-2 text-sm text-gray-700">
              <span>{{ section.contacts.address }}</span>
              <a :href="`mailto:${section.contacts.email}`">
                {{ section.contacts.email }}
              </a>
              <a :href="section.contacts.linkedin" target="_blank"> LinkedIn </a>
              <a :href="section.contacts.github" target="_blank"> GitHub </a>
            </div>
          </div>

          <!-- SECTION -->
          <div v-else class="mt-8">
            <h2 class="text-xl font-semibold mb-2">
              {{ section.title }}
            </h2>

            <ul class="list-disc pl-5 space-y-1">
              <li v-for="(item, idx) in section.content" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </Container>
</template>

<script>
import AppContainer from "./components/Container.vue";

export default {
  components: { Container: AppContainer },
  data() {
    return {
      markdownSource: "",
    };
  },
  computed: {
    sections() {
      const lines = this.markdownSource.split("\n");

      const result = [];
      let current = null;

      for (const rawLine of lines) {
        const line = rawLine.trim();

        if (!line) continue;

        // HEADER
        if (line.startsWith("# ")) {
          if (current) result.push(current);

          current = {
            type: "header",
            title: line.replace(/^#\s+/, ""),
            role: "",
            contacts: {
              address: "",
              email: "",
              linkedin: "",
              github: "",
            },
          };

          continue;
        }

        // SECTION
        if (line.startsWith("## ")) {
          if (current) result.push(current);

          current = {
            type: "section",
            title: line.replace(/^##\s+/, ""),
            content: [],
          };

          continue;
        }

        // HEADER CONTENT PARSING (key: value)
        if (current?.type === "header") {
          if (!current.role) {
            current.role = line;
            continue;
          }

          const parts = line.split("|").map((p) => p.trim());

          for (const part of parts) {
            const [key, value] = part.split(":").map((s) => s.trim());

            if (!key || !value) continue;

            const normalizedKey = key.toLowerCase();

            if (normalizedKey in current.contacts) {
              current.contacts[normalizedKey] = value;
            }
          }

          continue;
        }

        // SECTION CONTENT
        if (current) {
          current.content.push(line);
        }
      }

      if (current) result.push(current);
      console.log(result);
      return result;
    },
  },
};
</script>
