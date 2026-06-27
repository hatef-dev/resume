import { defineStore } from "pinia";
const useUploadStore = defineStore("upload", {
  state() {
    return {
      image: null,
    };
  },
});
export default useUploadStore;
