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
      <aside class="col-span-2 bg-white p-10 rounded-xl overflow-auto">
        <div v-for="(section, i) in sections" :key="i">
          <!-- HEADER -->
          <div v-if="section.type === 'header'">
            <h1 class="font-semibold leading-[0.94] tracking-[-0.036em] text-4xl padding-indicator">
              {{ section.title }}
            </h1>

            <p
              class="font-semibold mt-4 uppercase tracking-[0.2em] text-green-800 padding-indicator"
            >
              {{ section.role }}
            </p>

            <div class="flex gap-4 mt-2 text-sm text-gray-700">
              <span>{{ section.contacts.address }}</span>
              <a class="underline text-green-800" :href="`mailto:${section.contacts.email}`">
                {{ section.contacts.email }}
              </a>
              <a
                class="underline text-green-800"
                :href="section.contacts.linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                class="underline text-green-800"
                :href="section.contacts.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <!-- SECTION -->
          <div v-if="section.type === 'section'" class="mt-4">
            <h2
              class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator text-green-800 text-xs"
            >
              {{ section.title }}
            </h2>

            <p>{{ section.content.join("\n") }}</p>
          </div>

          <!-- EXPERIENCE -->
          <div class="flex flex-col gap-y-2">
            <div v-for="(item, i) in section.items" :key="i" class="">
              <div>
                <div class="flex items-center justify-between mt-1">
                  <div class="flex gap-x-2 items-center">
                    <h3 class="font-semibold text-sm">{{ item.title }}</h3>
                    <span class="w-1 h-1 rounded-full bg-green-800"></span>
                    <p class="text-[14px] text-[#475569]">{{ item.company }}</p>
                  </div>
                  <p
                    v-if="item.period"
                    class="shrink-0 text-green-800/80 text-right font-semibold uppercase tracking-[0.11em] text-xs"
                  >
                    {{ item.period }}
                  </p>
                </div>
                <span class="text-sm py-2 text-gray-700 italic">{{ item.location }}</span>

                <ul
                  class="space-y-1.5 pl-5 list-outside list-disc text-black text-sm leading-relaxed font-semibold"
                >
                  <li v-for="(point, j) in item.highlights" :key="j" class="pl-1 font-normal">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
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
      markdownSource: `# Alex Morgan
Senior Full Stack Engineer
address: San Francisco, CA | email: alex@example.com | linkedin: linkedin.com/in/alexmorgan | github: github.com/alexmorgan

## Summary
Product-minded engineer with a track record of shipping customer-facing software quickly, building internal leverage, and turning ambiguous ideas into reliable systems. Strong in frontend architecture, developer experience, and cross-functional execution.

## Experience
### Senior Full Stack Engineer | Helio
*Remote | 2022 - Present*
- Built the company's first end-to-end product surface...
- Designed a durable frontend platform...
- Partnered directly with design...
`,
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

        // Experience
        if (line.startsWith("### ")) {
          const rawTitle = line.replace(/^###\s+/, "");

          const [title, company] = rawTitle.split("|").map((item) => item.trim());

          current.items ??= [];

          current.items.push({
            type: "experience",
            title,
            company,
            location: "",
            period: "",
            highlights: [],
          });

          continue;
        }

        if (line.startsWith("*") && line.endsWith("*") && current?.items?.length) {
          const metadata = line.slice(1, -1).trim();

          const item = current.items.at(-1);

          const parts = metadata.split("|").map((part) => part.trim());

          if (parts.length === 2) {
            item.location = parts[0];
            item.period = parts[1];
          } else {
            item.location = "";
            item.period = parts[0];
          }

          continue;
        }

        if (line.startsWith("- ") && current?.items?.length > 0) {
          const lastExperience = current.items.at(-1);

          if (lastExperience?.type === "experience") {
            lastExperience.highlights.push(line.substring(2));
          }

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
            if (normalizedKey === "linkedin" || normalizedKey === "github") {
              current.contacts[normalizedKey] = this.normalizeUrl(value);
            }
          }

          continue;
        }

        // SECTION CONTENT
        if (current) {
          current.content.push(line);
          console.log(line);
        }
      }

      if (current) result.push(current);
      console.log(result);
      return result;
    },
  },
  methods: {
    normalizeUrl(url) {
      if (!url) return "";

      if (url.startsWith("http")) return url;

      return `https://${url}`;
    },
  },
};
</script>
