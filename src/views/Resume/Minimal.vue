<template>
  <div class="container">
    <div class="block grid-cols-3 gap-x-3 md:grid">
      <aside class="col-span-1 w-full overflow-hidden">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-200"
        >
          Markdown source
        </h3>
        <MarkDown @sections="(val) => (sections = val)" />
      </aside>
      <aside class="col-span-2">
        <DownloadPdf />
        <div id="resume-preview" ref="preview" class="bg-white p-10 rounded-xl">
          <div v-for="(section, i) in sections" :key="i">
            <!-- HEADER -->
            <div v-if="section.type === 'header'">
              <h1
                class="font-semibold leading-[0.94] tracking-[-0.036em] text-4xl padding-indicator"
              >
                {{ section.title }}
              </h1>

              <p
                class="font-semibold mt-4 uppercase tracking-[0.2em] resumeColor padding-indicator"
              >
                {{ section.role }}
              </p>

              <div class="flex gap-4 mt-2 text-sm resumeGrayText">
                <span>{{ section.contacts.address }}</span>
                <a class="underline resumeColor" :href="`mailto:${section.contacts.email}`">
                  {{ section.contacts.email }}
                </a>
                <a
                  class="underline resumeColor"
                  :href="section.contacts.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  class="underline resumeColor"
                  :href="section.contacts.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a class="underline resumeColor" :href="`tel:${section.contacts.phone}`">
                  {{ section.contacts.phone }}
                </a>
              </div>
            </div>

            <!-- SECTION -->
            <div v-if="section.type === 'section'" class="my-2">
              <div class="flex items-center mb-2 gap-x-2">
                <h2
                  class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator resumeColor text-xs"
                >
                  {{ section.title }}
                </h2>

                <div style="" class="w-full h-0.5 border-t-2 border-green-800/40"></div>
              </div>

              <p v-if="section.content.length">{{ section.content.join("\n") }}</p>
            </div>

            <!-- EXPERIENCE, PROJECTS, EDUCATION -->
            <div
              v-if="
                section.type === 'experience' ||
                section.type === 'projects' ||
                section.type === 'education'
              "
              class="flex flex-col gap-y-2"
            >
              <div v-for="(item, i) in section.items" :key="i" class="">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex gap-x-2 items-center">
                      <h3 class="font-semibold text-sm">{{ item.title }}</h3>
                      <span class="w-1 h-1 rounded-full resumeBackGround"></span>
                      <p class="text-[14px]">{{ item.company }}</p>
                    </div>
                    <p
                      v-if="item.period"
                      class="shrink-0 resumeColor/80 text-right font-semibold text-green-800 uppercase tracking-[0.11em] text-xs"
                    >
                      {{ item.period }}
                    </p>
                  </div>
                  <span class="text-sm py-2 resumeGrayText italic">{{ item.location }}</span>

                  <ul
                    class="space-y-1.5 pl-5 list-outside list-disc text-sm leading-relaxed font-semibold"
                  >
                    <li v-for="(point, j) in item.highlights" :key="j" class="pl-1 font-normal">
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-if="section.type === 'skills'" class="">
              <div class="space-y-2">
                <div
                  v-for="(skills, category, i) in section.skills"
                  :key="i"
                  class="flex flex-wrap gap-2"
                >
                  <span class="font-semibold text-sm">{{ category }}:</span>
                  <span v-for="(skill, j) in skills" :key="j" class="text-sm resumeGrayText">
                    {{ skill }}{{ j < skills.length - 1 ? "," : "" }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import DownloadPdf from "@/components/DownloadPdf.vue";
import MarkDown from "@/components/MarkDown.vue";
export default {
  name: "Minimal",
  data() {
    return {
      sections: [],
    };
  },
  components: {
    MarkDown,
    DownloadPdf,
  },
};
</script>

<style>
@media print {
  body * {
    visibility: hidden;
  }
  #resume-preview,
  #resume-preview * {
    visibility: visible;
  }
  #resume-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .no-print {
    display: none !important;
  }
}
</style>

<style scoped>
.resumeColor {
  color: #016630 !important;
}
.resumeGrayText {
  color: #475569 !important;
}
.resumeBackGround {
  background-color: #016630 !important;
}
.flex {
  display: flex !important;
}
.items-center {
  align-items: center !important;
}
.justify-between {
  justify-content: space-between !important;
}
</style>
