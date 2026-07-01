<template>
  <div class="container">
    <div class="block grid-cols-3 gap-x-3 md:grid">
      <aside class="col-span-1 w-full overflow-hidden">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-200"
        >
          Markdown source
        </h3>
        <MarkDown @sections="(val) => (sections = val)" class="mb-10" />
      </aside>
      <aside class="col-span-2 relative">
        <DownloadPdf :sections="sections" />
        <div class="overflow-hidden">
          <div
            id="resume-preview"
            ref="preview"
            class="bg-[#25262a] relative max-h-[297mm] overflow-y-hidden flex flex-col"
          >
            <div class="w-10 h-10 bg-[#ff4c20]"></div>
            <template v-for="(section, i) in sections" :key="i">
              <!--Header-->
              <div v-if="section.type === 'header'" class="px-10 mb-24 relative">
                <div
                  class="inline-flex text-[#ff4c20] flex-col bg-[#25262a] my-5 mx-10 z-20 relative"
                >
                  <h1 class="text-6xl font-bold tracking-[0.05em]">{{ firstName }}</h1>
                  <h2 class="text-5xl py-2 poiret-one">{{ lastName }}</h2>
                  <span
                    class="font-semibold pb-2 text-gray-500 uppercase tracking-[0.2em] resumeColor padding-indicator"
                    >{{ section.role }}</span
                  >
                </div>
                <div class="absolute top-0 border-white border-2 w-32 h-72 z-10"></div>
                <div class="absolute top-44 left-44">
                  <div class="flex flex-col gap-2 mt-2 text-[14px]">
                    <div class="flex gap-x-4">
                      <div v-if="section.contacts.phone" class="flex items-center gap-2">
                        <svg
                          class="w-4 h-4 flex-shrink-0 text-[#ff4c20]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span class="text-gray-500">{{ section.contacts.phone }}</span>
                      </div>
                      <div v-if="section.contacts.address" class="flex items-center gap-2">
                        <svg
                          class="w-4 h-4 flex-shrink-0 text-[#ff4c20]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span class="text-gray-500">{{ section.contacts.address }}</span>
                      </div>
                    </div>
                    <a
                      v-if="section.contacts.email"
                      class="flex items-center gap-2 underline"
                      :href="`mailto:${section.contacts.email}`"
                    >
                      <svg
                        class="w-4 h-4 flex-shrink-0 text-[#ff4c20]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="text-gray-500">{{ section.contacts.email }}</span>
                    </a>
                    <div class="flex gap-x-4">
                      <a
                        v-if="section.contacts.linkedin"
                        class="flex items-center gap-2 underline resumeColor"
                        :href="section.contacts.linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          class="w-4 h-4 flex-shrink-0 text-[#ff4c20]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          />
                        </svg>
                        <span class="text-gray-500">LinkedIn</span>
                      </a>
                      <a
                        v-if="section.contacts.github"
                        class="flex items-center gap-2 underline resumeColor"
                        :href="section.contacts.github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          class="w-4 h-4 flex-shrink-0 text-[#ff4c20]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                        <span class="text-gray-500">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div class="flex gap-x-6 px-10">
              <div class="w-1/2 flex flex-col gap-y-6">
                <template v-for="(section, i) in sections" :key="i">
                  <!--Summary-->
                  <div
                    class="flex flex-col gap-y-8 col-span-1 break-inside-avoid"
                    v-if="section.type === 'summary'"
                  >
                    <div class="mt-10">
                      <div class="flex flex-col gap-y-8 col-span-1">
                        <div class="flex flex-col gap-y-2">
                          <h3
                            class="text-xl font-semibold pb-2 text-white uppercase tracking-[0.2em] resumeColor padding-indicator"
                          >
                            {{ section.title }}
                          </h3>
                          <div class="flex gap-x-6 items-stretch min-h-[100px]">
                            <div class="w-0.5 bg-white relative">
                              <span
                                class="absolute top-4 -left-3 w-6 h-6 bg-[#25262a] rounded-full flex justify-center items-center"
                              >
                                <span class="w-2 h-2 rounded-full bg-[#ff4c20]"></span>
                              </span>
                            </div>
                            <p
                              class="text-white py-1 text-sm"
                              v-for="(item, i) in section.content"
                              :key="i"
                            >
                              {{ item }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-1" v-if="section.type === 'skills'">
                    <div class="mt-10">
                      <div class="flex flex-col gap-y-8 col-span-1">
                        <div class="flex flex-col gap-y-2">
                          <h3
                            class="text-xl font-semibold pb-2 text-white uppercase tracking-[0.2em] resumeColor padding-indicator"
                          >
                            {{ section.title }}
                          </h3>
                          <div class="flex gap-x-6">
                            <div class="w-0.5 bg-white relative">
                              <span
                                class="absolute top-4 -left-3 w-6 h-6 bg-[#25262a] rounded-full flex justify-center items-center"
                              >
                                <span class="w-2 h-2 rounded-full bg-[#ff4c20]"></span>
                              </span>
                            </div>
                            <div class="flex flex-col gap-y-4">
                              <div
                                v-for="(skills, category, i) in section.skills"
                                :key="i"
                                class="flex flex-wrap gap-2"
                              >
                                <span class="font-semibold text-sm text-[#ff4c20]"
                                  >{{ category }}:</span
                                >
                                <span
                                  v-for="(skill, j) in skills"
                                  :key="j"
                                  class="text-sm text-white"
                                >
                                  {{ skill }}{{ j < skills.length - 1 ? "," : "" }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1" v-if="section.type === 'education'">
                    <div class="mt-10">
                      <div class="flex flex-col gap-y-8 col-span-1">
                        <div class="flex flex-col gap-y-2">
                          <h3
                            class="text-xl font-semibold pb-2 text-white uppercase tracking-[0.2em] resumeColor padding-indicator"
                          >
                            {{ section.title }}
                          </h3>
                          <div class="flex gap-x-6">
                            <div class="w-0.5 bg-white relative">
                              <span
                                class="absolute top-4 -left-3 w-6 h-6 bg-[#25262a] rounded-full flex justify-center items-center"
                              >
                                <span class="w-2 h-2 rounded-full bg-[#ff4c20]"></span>
                              </span>
                            </div>
                            <div class="flex flex-col gap-y-4 w-full pr-10">
                              <div v-for="(item, i) in section.items" :key="i" class="text-base">
                                <div class="flex flex-col gap-y-2">
                                  <h4 class="text-base font-semibold text-[#ff4c20]">
                                    {{ item.title }}
                                  </h4>

                                  <div class="flex justify-between items-center w-full">
                                    <span class="text-base text-white">{{ item.company }}</span>
                                    <span class="text-sm text-white">{{ item.period }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div class="w-1/2 flex flex-col gap-y-6">
                <template v-for="(section, i) in sections" :key="i">
                  <div class="col-span-1" v-if="section.type === 'experience'">
                    <div class="mt-10">
                      <div class="flex flex-col gap-y-8 col-span-1">
                        <div class="flex flex-col gap-y-2">
                          <h3
                            class="text-xl font-semibold pb-2 text-white uppercase tracking-[0.2em] resumeColor padding-indicator"
                          >
                            {{ section.title }}
                          </h3>
                          <div class="flex gap-x-6 items-stretch min-h-[100px]">
                            <div class="w-0.5 bg-white relative">
                              <span
                                class="absolute top-4 -left-3 w-6 h-6 bg-[#25262a] rounded-full flex justify-center items-center"
                              >
                                <span class="w-2 h-2 rounded-full bg-[#ff4c20]"></span>
                              </span>
                            </div>
                            <div class="flex flex-col gap-y-2">
                              <div v-for="(item, i) in section.items" :key="i" class="">
                                <div>
                                  <div class="flex flex-col gap-y-2 mb-2">
                                    <div class="flex gap-x-2 items-center">
                                      <h3 class="font-semibold text-sm text-[#ff4c20]">
                                        {{ item.title }}
                                      </h3>
                                      <span class="w-0.5 h-1 rounded-full bg-white"></span>
                                      <p class="text-[14px] text-white">{{ item.company }}</p>
                                    </div>
                                    <p
                                      v-if="item.period"
                                      class="text-white font-semibold text-black-800 uppercase tracking-[0.11em] text-xs"
                                    >
                                      {{ item.period }}
                                    </p>
                                  </div>
                                  <span class="text-sm py-2 text-[#ff4c20] italic">{{
                                    item.location
                                  }}</span>

                                  <ul
                                    class="space-y-1.5 pl-5 list-outside list-disc text-sm leading-relaxed font-semibold"
                                  >
                                    <li
                                      v-for="(point, j) in item.highlights"
                                      :key="j"
                                      class="pl-1 font-normal text-white"
                                    >
                                      {{ point }}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-for="(section, i) in sections" :key="i">
                  <div class="col-span-1" v-if="section.type === 'projects'">
                    <div class="mt-10">
                      <div class="flex flex-col gap-y-8 col-span-1">
                        <div class="flex flex-col gap-y-2">
                          <h3
                            class="text-xl font-semibold pb-2 text-white uppercase tracking-[0.2em] resumeColor padding-indicator"
                          >
                            {{ section.title }}
                          </h3>
                          <div class="flex gap-x-6 items-stretch min-h-[100px]">
                            <div class="w-0.5 bg-white relative">
                              <span
                                class="absolute top-4 -left-3 w-6 h-6 bg-[#25262a] rounded-full flex justify-center items-center"
                              >
                                <span class="w-2 h-2 rounded-full bg-[#ff4c20]"></span>
                              </span>
                            </div>
                            <div class="flex flex-col gap-y-2">
                              <!-- Selected Projects -->
                              <div v-for="(item, i) in section.items" :key="i" class="">
                                <div>
                                  <div class="flex flex-col mb-2">
                                    <div class="flex items-center gap-x-2">
                                      <h3 class="text-base text-[#ff4c20]">{{ item.title }}</h3>
                                      <span class="w-1 h-1 rounded-full bg-white"></span>
                                      <p class="text-[14px] text-white">{{ item.company }}</p>
                                    </div>
                                    <p
                                      v-if="item.period"
                                      class="shrink-0 text-white font-semibold uppercase tracking-[0.11em] text-xs"
                                    >
                                      {{ item.period }}
                                    </p>
                                  </div>
                                  <span class="text-sm py-2 text-[#ff4c20] italic">{{
                                    item.location
                                  }}</span>

                                  <ul
                                    class="space-y-1.5 pl-5 list-outside list-disc text-sm leading-relaxed font-semibold"
                                  >
                                    <li
                                      v-for="(point, j) in item.highlights"
                                      :key="j"
                                      class="pl-1 font-normal text-white"
                                    >
                                      {{ point }}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
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
  components: {
    DownloadPdf,
    MarkDown,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      sections: [],
    };
  },
  watch: {
    sections(newSections) {
      if (newSections && newSections[0]) {
        this.spaceBetweenFirstNameAndLastName(newSections[0].title);
      }
    },
  },
  mounted() {
    // Only call if sections already exist
    if (this.sections && this.sections[0]) {
      this.spaceBetweenFirstNameAndLastName(this.sections[0].title);
    }
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
<style scoped>
#resume-preview {
  min-height: 297mm;
  height: 100%;
}
</style>
