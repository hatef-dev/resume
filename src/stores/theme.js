import { ref, watch, onUnmounted } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false);
  let isInitializing = true;
  let hasUserSelectedTheme = false;
  let mediaQueryList = null;

  function toggleTheme() {
    hasUserSelectedTheme = true;
    isDark.value = !isDark.value;
  }

  function setTheme(theme) {
    if (theme === "dark" || theme === "light") {
      hasUserSelectedTheme = true;
    }
    if (theme === "dark") {
      isDark.value = true;
    } else if (theme === "light") {
      isDark.value = false;
    } else {
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  function applyTheme(isDarkMode) {
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  function handleSystemThemeChange(e) {
    if (!hasUserSelectedTheme) {
      isDark.value = e.matches;
    }
  }

  watch(
    isDark,
    (newValue) => {
      if (typeof window !== "undefined") {
        if (!isInitializing) {
          localStorage.setItem("theme", newValue ? "dark" : "light");
        }
        applyTheme(newValue);
        isInitializing = false;
      }
    },
    { immediate: true },
  );

  function initTheme() {
    if (typeof window !== "undefined") {
      isInitializing = true;
      const savedTheme = localStorage.getItem("theme");
      hasUserSelectedTheme = !!savedTheme;

      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme("system");
      }

      mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQueryList.addEventListener("change", handleSystemThemeChange);

      isInitializing = false;
    }
  }

  function cleanup() {
    if (mediaQueryList) {
      mediaQueryList.removeEventListener("change", handleSystemThemeChange);
    }
  }

  return { isDark, toggleTheme, setTheme, initTheme, cleanup };
});
