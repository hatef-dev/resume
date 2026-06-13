<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AppContainer",
  props: {
    maxWidth: {
      type: String,
      default: "7xl",
      validator: (value) =>
        [
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "full",
          "none",
        ].includes(value),
    },
    padding: {
      type: String,
      default: "default",
      validator: (value) => ["none", "sm", "default", "lg"].includes(value),
    },
    centered: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const containerClasses = computed(() => {
      const classes = [];

      if (props.centered) {
        classes.push("mx-auto");
      }

      const maxWClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
        none: "",
      };
      classes.push(maxWClasses[props.maxWidth]);

      const paddingClasses = {
        none: "px-0",
        sm: "px-4 sm:px-6",
        default: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
      };
      classes.push(paddingClasses[props.padding]);

      return classes.join(" ");
    });

    return { containerClasses };
  },
};
</script>