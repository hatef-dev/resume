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
        <div class="rounded-xl overflow-hidden">
          <div id="resume-preview" ref="preview" class="bg-white p-10 relative">
            <div class="relative">
              <img src="../../assets/dot.png" class="w-28 h-28 absolute opacity-20 z-0" />
            </div>
            <div v-for="(section, i) in sections" :key="i">
              <div v-if="section.type === 'header'">
                <div class="flex justify-between items-center">
                  <div>
                    <div class="px-3.5 font-semibold tracking-[0.2em] uppercase poiret-one mt-7">
                      <h1 class="text-5xl">
                        {{ firstName }}
                      </h1>
                      <h1 class="text-5xl">{{ lastName }}</h1>
                    </div>
                    <div class="mt-4">
                      <h2 class="text-base red-hat-display uppercase text-gray-500">
                        {{ section.role }}
                      </h2>
                    </div>
                  </div>
                  <div class="flex flex-col gap-y-2" dir="rtl">
                    <h3 class="uppercase red-hat-display">Address</h3>
                    <div class="w-16 h-1 bg-gray-800 rounded-full text-right mt-1"></div>
                    <div v-if="section.contacts.address">
                      {{ section.contacts.address }}
                    </div>
                  </div>
                </div>
                <div class="mt-2 h-1 border-b border-gray-300 dark:border-gray-700"></div>
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
import dot from "@/assets/dot.png";
export default {
  components: {
    DownloadPdf,
    MarkDown,
    dot,
  },
  name: "Creative",
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
