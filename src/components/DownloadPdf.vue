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
          <!-- Google Font Imports -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
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

      // Wait for fonts to load before printing
      setTimeout(() => {
        if (printWindow.document.fonts && printWindow.document.fonts.ready) {
          printWindow.document.fonts.ready.then(() => {
            printWindow.print();
            printWindow.close();
          });
        } else {
          // Fallback for older browsers
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
          }, 1000);
        }
      }, 250);
    },
  },
};
</script>

<style></style>
