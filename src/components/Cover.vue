<template>
  <div
    class="border-2 border-dashed rounded-lg p-12 text-center hover:border-white transition-colors cursor-pointer bg-neutral-900/50"
    :class="isDragging ? 'border-green-500' : 'border-neutral-700'"
    @dragenter.prevent.stop="isDragging = true"
    @dragleave.prevent.stop="isDragging = false"
    @dragover.prevent.stop="isDragging = true"
    @dragend.prevent.stop="isDragging = false"
    @dragstart.prevent.stop=""
    @drop.prevent.stop="handleDrop"
    @click="triggerFileInput"
  >
    <div v-if="!image">
      <svg
        class="w-12 h-12 mx-auto mb-3 text-neutral-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p class="text-lg font-medium text-white mb-2">Drag and drop your resume cover photo here</p>
      <p class="text-sm text-neutral-400 mb-4">or click to browse files</p>
      <p class="text-sm text-white mb-4">
        {{ image ? "" : "please upload a file with jpeg or png format only" }}
      </p>

      <p class="text-xs text-neutral-500 mt-4">{{ messages }}</p>
      <div class="flex justify-center items-center">
        <ButtonStyle class="w-1/2" @click.stop="triggerFileInput"> Choose File </ButtonStyle>
      </div>
      <!-- Hidden file input -->
      <input
        ref="fileInput"
        type="file"
        accept="image/jpeg,image/png"
        class="hidden"
        @change="handleFileSelect"
      />
    </div>
    <div class="flex flex-col justify-center items-center" v-else>
      <p class="text-2xl font-bold text-green-400 mb-4">
        {{ image ? image.name + " uploaded successfully" : "" }}
      </p>
      <ButtonStyle @click="removeImage" class="text-red-400">Remove</ButtonStyle>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import useUploadStore from "@/stores/uploadCover";
import ButtonStyle from "./ButtonStyle.vue";
export default {
  name: "UploadCover",
  components: {
    ButtonStyle,
  },
  props: {
    messages: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isDragging: false,
    };
  },
  computed: {
    ...mapWritableState(useUploadStore, ["image"]),
  },
  methods: {
    handleFileSelect(e) {
      const file = e.target.files[0];
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        this.image = file;
      } else if (file) {
        this.$emit("update:messages", "The Format should be jpeg or png format");
      }
    },
    async handleDrop(e) {
      this.isDragging = false;
      const file = e.dataTransfer.files[0];
      if (file.type === "image/jpeg" || file.type === "image/png") {
        this.image = file;
      } else {
        this.$emit("update:messages", "The Format should be jpeg or png format");
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    removeImage() {
      this.image = null;
    },
  },
};
</script>
