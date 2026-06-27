<template>
  <div class="container nunito-sans">
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
        <DownloadPdf :sections="sections" />
        <div id="resume-preview" ref="preview" class="bg-white p-10 rounded-xl">
          <div v-for="(section, i) in sections" :key="i" class="w-full flex gap-x-10">
            <aside class="w-3/5">
              <div class="" v-if="section.type === 'header'">
                <div
                  class="flex flex-col gap-y-1 nunito-sans font-semibold leading-[0.94] text-4xl padding-indicator"
                >
                  <div class="uppercase">
                    <h3 class="text-3xl font-extrabold tracking-[0.16em]">{{ firstName }}</h3>
                    <h1 class="text-5xl font-bold tracking-[0.036em]">{{ lastName }}</h1>
                  </div>
                  <p
                    class="font-semibold mt-4 text-base uppercase tracking-[0.2em] padding-indicator"
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
                  </div>
                </div>
              </div>
              <!-- SECTION -->
              <div v-if="section.type === 'section'">
                <p class="text-sm my-14" v-if="section.content.length">
                  {{ section.content.join("\n") }}
                </p>
              </div>
              <div v-if="section.type === 'section' && section.title !== 'Summary'">
                <div class="flex flex-col gap-y-1">
                  <h2
                    class="shrink-0 font-bold uppercase tracking-[0.22em] padding-indicator resumeColor text-xl"
                  >
                    {{ section.title }}
                  </h2>

                  <div style="" class="w-full h-0.5 border-t-2 border-black mb-2"></div>
                </div>
              </div>
              <!-- EXPERIENCE -->
              <div
                v-if="
                  section.title === 'Experience' ||
                  section.title === 'Selected Projects' ||
                  section.title === 'Education'
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
                        class="shrink-0 resumeColor/80 text-right font-semibold text-black-800 uppercase tracking-[0.11em] text-xs"
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
            </aside>
            <aside class="w-2/5">ddd</aside>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import MarkDown from "@/components/MarkDown.vue";
import DownloadPdf from "@/components/DownloadPdf.vue";
export default {
  name: "Modern",
  data() {
    return {
      firstName: "",
      lastName: "",
      sections: [],
    };
  },
  components: {
    MarkDown,
    DownloadPdf,
  },
  mounted() {
    this.spaceBetweenFirstNameAndLastName(this.sections[0].title);
  },
  methods: {
    spaceBetweenFirstNameAndLastName(title) {
      const fullName = title;

      const parts = fullName.trim().split(/\s+/);

      this.firstName = parts.shift() || "";
      this.lastName = parts.join(" ");
    },
  },
};
</script>
