<template>
  <div class="container nunito-sans">
    <div class="block grid-cols-3 gap-x-3 md:grid">
      <aside class="col-span-1 w-full overflow-hidden">
        <h3
          class="whitespace-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-200"
        >
          Markdown source
        </h3>
        <MarkDown @sections="(val) => (sections = val)" class="mb-10" />
        <Cover />
      </aside>
      <aside class="col-span-2">
        <DownloadPdf :sections="sections" />
        <div class="rounded-xl overflow-hidden">
          <div id="resume-preview" ref="preview" class="bg-[#cacbd0] p-10">
            <div class="flex gap-x-10">
              <aside class="w-3/5">
                <div v-for="(section, i) in sections" :key="i" class="w-full flex">
                  <div class="" v-if="section.type === 'header'">
                    <div class="flex flex-col gap-y-2 poppins leading-[0.94] padding-indicator">
                      <div class="uppercase red-hat-display">
                        <h3 class="text-2xl font-boldtracking-[0.3em] text-black">
                          {{ firstName }}
                        </h3>
                        <h1 class="text-6xl tracking-[0.05em] text-black">
                          {{ lastName }}
                        </h1>
                      </div>
                      <p
                        class="font-semibold mt-4 text-base uppercase tracking-[0.2em] padding-indicator"
                      >
                        {{ section.role }}
                      </p>
                      <div class="flex flex-col gap-4 mt-2 text-sm resumeGrayText">
                        <div v-if="section.contacts.address" class="flex items-center gap-2">
                          <svg
                            class="w-4 h-4 flex-shrink-0"
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
                          <span>{{ section.contacts.address }}</span>
                        </div>
                        <a
                          v-if="section.contacts.email"
                          class="flex items-center gap-2 underline resumeColor"
                          :href="`mailto:${section.contacts.email}`"
                        >
                          <svg
                            class="w-4 h-4 flex-shrink-0"
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
                          <span>{{ section.contacts.email }}</span>
                        </a>
                        <a
                          v-if="section.contacts.linkedin"
                          class="flex items-center gap-2 underline resumeColor"
                          :href="section.contacts.linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            class="w-4 h-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                        <a
                          v-if="section.contacts.github"
                          class="flex items-center gap-2 underline resumeColor"
                          :href="section.contacts.github"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            class="w-4 h-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                            />
                          </svg>
                          <span>GitHub</span>
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
                  <!-- EXPERIENCE -->
                  <div
                    class="w-full"
                    v-if="
                      section.type === 'section' &&
                      section.title !== 'Summary' &&
                      section.title === 'Experience'
                    "
                  >
                    <div>
                      <div class="flex flex-col gap-y-1">
                        <h2
                          class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator resumeColor text-lg"
                        >
                          {{ section.title }}
                        </h2>

                        <div style="" class="w-full h-0.5 border-t-2 border-black mb-2"></div>
                      </div>
                    </div>
                    <!-- EXPERIENCE -->
                    <div class="flex flex-col gap-y-2">
                      <div v-for="(item, i) in section.items" :key="i" class="">
                        <div>
                          <div class="flex items-center justify-between mb-2">
                            <div class="flex gap-x-2 items-center">
                              <h3 class="font-semibold text-sm">{{ item.title }}</h3>
                              <span class="w-1 h-1 rounded-full bg-gray-800"></span>
                              <p class="text-[14px]">{{ item.company }}</p>
                            </div>
                            <p
                              v-if="item.period"
                              class="shrink-0 resumeColor/80 text-right font-semibold text-black-800 uppercase tracking-[0.11em] text-xs"
                            >
                              {{ item.period }}
                            </p>
                          </div>
                          <span class="text-sm py-2 resumeGrayText italic">{{
                            item.location
                          }}</span>

                          <ul
                            class="space-y-1.5 pl-5 list-outside list-disc text-sm leading-relaxed font-semibold"
                          >
                            <li
                              v-for="(point, j) in item.highlights"
                              :key="j"
                              class="pl-1 font-normal"
                            >
                              {{ point }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside class="w-2/5">
                <div class="flex justify-center items-center">
                  <img :src="preview" alt="" class="w-52 h-52 object-cover rounded-xl grayscale" />
                </div>

                <!-- Education & Selected Projects & Skill -->
                <div v-for="(section, i) in sections" :key="i" class="w-full flex mt-6">
                  <!-- Selected Projects -->
                  <div
                    class="w-full"
                    v-if="section.type === 'section' && section.title === 'Selected Projects'"
                  >
                    <!-- Selected Projects Title-->
                    <div>
                      <div class="flex flex-col gap-y-1">
                        <h2
                          class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator resumeColor text-lg"
                        >
                          {{ section.title }}
                        </h2>

                        <div style="" class="w-full h-0.5 border-t-2 border-black mb-2"></div>
                      </div>
                    </div>
                    <!-- Selected Projects -->
                    <div v-for="(item, i) in section.items" :key="i" class="">
                      <div>
                        <div class="flex items-center justify-between mb-2">
                          <div class="flex flex-col gap-x-2">
                            <h3 class="text-base font-bold">{{ item.title }} :</h3>
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
                          <li
                            v-for="(point, j) in item.highlights"
                            :key="j"
                            class="pl-1 font-normal"
                          >
                            {{ point }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- EDUCATION -->
                  <div
                    class="w-full"
                    v-if="section.type === 'section' && section.title === 'Education'"
                  >
                    <!-- EDUCATION Title-->
                    <div>
                      <div class="flex flex-col gap-y-1">
                        <h2
                          class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator resumeColor text-lg"
                        >
                          {{ section.title }}
                        </h2>

                        <div style="" class="w-full h-0.5 border-t-2 border-black mb-2"></div>
                      </div>
                    </div>
                    <!-- EDUCATION Content -->
                    <div class="flex flex-col gap-y-2">
                      <div v-for="(item, i) in section.items" :key="i" class="">
                        <div>
                          <div class="flex items-center justify-between mb-2">
                            <div class="flex flex-col gap-y-2">
                              <h3 class="font-semibold text-xl">{{ item.title }}</h3>
                              <div class="flex justify-between gap-x-2 items-center w-full">
                                <p class="text-[14px]">{{ item.company }}</p>
                                <p
                                  v-if="item.period"
                                  class="resumeColor/80 text-right font-semibold text-black-800 uppercase tracking-[0.11em] text-xs"
                                >
                                  {{ item.period }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <span class="text-sm py-2 resumeGrayText italic">{{
                            item.location
                          }}</span>

                          <ul
                            class="space-y-1.5 pl-5 list-outside list-disc text-sm leading-relaxed font-semibold"
                          >
                            <li
                              v-for="(point, j) in item.highlights"
                              :key="j"
                              class="pl-1 font-normal"
                            >
                              {{ point }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- SKILLS -->
                  <div
                    v-if="section.type === 'section' && section.title === 'Skills'"
                    class="w-full"
                  >
                    <!-- Skills Title-->
                    <div>
                      <div class="flex flex-col gap-y-1">
                        <h2
                          class="shrink-0 font-semibold uppercase tracking-[0.22em] padding-indicator resumeColor text-lg"
                        >
                          {{ section.title }}
                        </h2>

                        <div style="" class="w-full h-0.5 border-t-2 border-black mb-2"></div>
                      </div>
                    </div>
                    <!-- Skills Content -->
                    <div v-if="section.title === 'Skills'" class="">
                      <div class="space-y-2">
                        <div
                          v-for="(skills, category, i) in section.skills"
                          :key="i"
                          class="flex flex-wrap items-center gap-2"
                        >
                          <span class="font-bold text-base">{{ category }}:</span>
                          <span
                            v-for="(skill, j) in skills"
                            :key="j"
                            class="text-sm resumeGrayText"
                          >
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
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import MarkDown from "@/components/MarkDown.vue";
import DownloadPdf from "@/components/DownloadPdf.vue";
import Cover from "@/components/Cover.vue";
import { mapWritableState } from "pinia";
import useUploadStore from "@/stores/uploadCover";
import defaultResumeImage from "@/assets/resume.jpg";

export default {
  name: "Modern",
  data() {
    return {
      firstName: "",
      lastName: "",
      sections: [],
      currentObjectUrl: null,
    };
  },
  components: {
    MarkDown,
    DownloadPdf,
    Cover,
  },
  computed: {
    ...mapWritableState(useUploadStore, ["image"]),
    preview() {
      // Clean up previous object URL to avoid memory leaks
      if (this.currentObjectUrl) {
        URL.revokeObjectURL(this.currentObjectUrl);
        this.currentObjectUrl = null;
      }

      if (this.image) {
        this.currentObjectUrl = URL.createObjectURL(this.image);
        return this.currentObjectUrl;
      }

      return defaultResumeImage;
    },
  },
  watch: {
    sections(newSections) {
      if (newSections && newSections[0]) {
        this.spaceBetweenFirstNameAndLastName(newSections[0].title);
      }
    },
  },
  beforeUnmount() {
    // Clean up object URL when component is destroyed
    if (this.currentObjectUrl) {
      URL.revokeObjectURL(this.currentObjectUrl);
    }
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
