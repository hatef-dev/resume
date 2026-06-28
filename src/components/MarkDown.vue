<template>
  <div class="overflow-y-auto rounded-2xl bg-[#F8F9FB] dark:bg-gray-900">
    <textarea
      v-model="markdownSource"
      name="markdownSource"
      id=""
      class="w-full border-0 focus:outline-none min-h-[50rem] flex-1 resize-none bg-transparent px-5 py-5 font-mono text-[0.98rem] leading-7 text-slate-900 dark:text-slate-100 outline-none"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "MarkDown",
  data() {
    return {
      markdownSource: `# Hatef Sanati
Full Stack Developer
address: San Francisco, CA | email: hatef.sanati@example.com | linkedin: linkedin.com/in/hatef-sanati | github: github.com/hatef-dev | phone: 555-123-4567

<!-- type:summary -->
## Summary
Product-minded engineer with a track record of shipping customer-facing software quickly, building internal leverage, and turning ambiguous ideas into reliable systems. Strong in frontend architecture, developer experience, and cross-functional execution.

<!-- type:experience -->
## Experience
### Senior Full Stack Engineer | Helio
*Remote | 2022 - Present*
- Built the company's first end-to-end product surface...
- Designed a durable frontend platform...
- Partnered directly with design...

### Senior Full Stack Engineer | Helio
*Remote | 2022 - Present*
- Built the company's first end-to-end product surface...
- Designed a durable frontend platform...
- Partnered directly with design...


<!-- type:projects -->
## Selected Projects
### Resume Builder | React, Next.js, TypeScript
- Built a markdown-first resume editor with a live one-page preview and print-ready output.

<!-- type:education -->
## Education
### University of Michigan | B.S. in Computer Science
*2015 - 2019*

<!-- type:skills -->
## Skills
Languages: TypeScript, JavaScript, Python, SQL
Frameworks: Vue, Nuxt.js, Node.js, Tailwind CSS
Platforms: Vercel, AWS, Postgres, GitHub Actions
`,
    };
  },
  mounted() {
    this.updateSections();
  },
  watch: {
    markdownSource: {
      handler() {
        this.updateSections();
      },
      immediate: false,
    },
  },
  methods: {
    updateSections() {
      const lines = this.markdownSource.split("\n");
      const result = [];
      let current = null;
      let pendingType = null; // Stores the type from HTML comments before headings

      for (const rawLine of lines) {
        const line = rawLine.trim();

        // Parse HTML comment metadata like <!-- type:skills -->
        if (line.startsWith("<!--") && line.endsWith("-->")) {
          const commentContent = line.slice(4, -3).trim();
          if (commentContent.startsWith("type:")) {
            pendingType = commentContent.slice(5).trim().toLowerCase();
          }
          continue;
        }

        if (!line) continue;

        // HEADER
        if (line.startsWith("# ")) {
          if (current) result.push(current);

          current = {
            type: "header",
            title: line.replace(/^#\s+/, ""),
            role: "",
            contacts: {
              address: "",
              email: "",
              linkedin: "",
              github: "",
              phone: "",
            },
          };
          pendingType = null; // Clear pending type after using it
          continue;
        }

        // SECTION (## heading)
        if (line.startsWith("## ")) {
          if (current) result.push(current);

          // Use pending type if available, default to "section"
          const sectionType = pendingType || "section";

          current = {
            type: sectionType,
            title: line.replace(/^##\s+/, ""),
            content: [],
            items: [],
            skills: {},
          };
          pendingType = null; // Clear pending type after using it
          continue;
        }

        // Experience / Project / Education items (### heading)
        if (line.startsWith("### ")) {
          const rawTitle = line.replace(/^###\s+/, "");
          const [title, company] = rawTitle.split("|").map((item) => item.trim());

          current.items ??= [];
          current.items.push({
            type: current.type, // Inherit section type for items
            title,
            company,
            location: "",
            period: "",
            highlights: [],
          });
          continue;
        }

        // Time and location
        if (line.startsWith("*") && line.endsWith("*") && current?.items?.length) {
          const metadata = line.slice(1, -1).trim();
          const item = current.items.at(-1);
          const parts = metadata.split("|").map((part) => part.trim());

          if (parts.length === 2) {
            item.location = parts[0];
            item.period = parts[1];
          } else {
            item.location = "";
            item.period = parts[0];
          }
          continue;
        }

        // Highlights
        if (line.startsWith("- ") && current?.items?.length > 0) {
          const lastItem = current.items.at(-1);
          lastItem.highlights.push(line.substring(2));
          continue;
        }

        // HEADER CONTENT
        if (current?.type === "header") {
          if (!current.role) {
            current.role = line;
            continue;
          }

          const parts = line.split("|").map((p) => p.trim());
          for (const part of parts) {
            const [key, value] = part.split(":").map((s) => s.trim());
            if (!key || !value) continue;
            const normalizedKey = key.toLowerCase();

            if (normalizedKey === "linkedin" || normalizedKey === "github") {
              current.contacts[normalizedKey] = this.normalizeUrl(value);
            } else if (normalizedKey in current.contacts) {
              current.contacts[normalizedKey] = value;
            }
          }
          continue;
        }

        // Skills parsing (works for any section with type "skills")
        if (current?.type === "skills" && line.includes(":")) {
          const [key, value] = line.split(":").map((item) => item.trim());
          current.skills[key] = value.split(",").map((item) => item.trim());
          continue;
        }

        // SECTION CONTENT (for any section type)
        if (current?.type) {
          current.content.push(line);
        }
      }

      if (current) result.push(current);
      console.log("Parsed sections:", result);
      this.$emit("sections", result);
    },
    normalizeUrl(url) {
      if (!url) return "";
      if (url.startsWith("http")) return url;
      return `https://${url}`;
    },
  },
};
</script>
