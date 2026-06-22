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
      default: "content",
      validator: (value) =>
        ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "none"].includes(
          value,
        ),
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
        content: "max-w-[1212px]",
        full: "max-w-full",
        none: "",
      };
      classes.push(maxWClasses[props.maxWidth]);

      return classes.join(" ");
    });

    return { containerClasses };
  },
};
</script>
