<template>
  <button @click="downloadPDF" class="dark:text-white">Download PDF</button>
</template>
<script>
export default {
  name: "DownloadPdf",
  methods: {
    downloadPDF() {
      const element = document.getElementById("resume-preview");
      const printWindow = window.open("", "_blank");

      const styles = Array.from(document.styleSheets)
        .map((sheet) => {
          try {
            return Array.from(sheet.cssRules)
              .map((rule) => rule.cssText)
              .join("\n");
          } catch (e) {
            return "";
          }
        })
        .join("\n");

      printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>${styles}</style>
          <style>
            @media print {
              * {
          -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
}
@page {
  margin: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  height: auto;
}
#resume-preview {
  width: 210mm;
  min-height: 297mm;
}
            }
          </style>
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `);

      printWindow.document.close();
      printWindow.focus();

      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    },
  },
};
</script>

<style></style>
