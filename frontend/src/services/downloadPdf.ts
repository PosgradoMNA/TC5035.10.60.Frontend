import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { marked } from "marked";

const getFileName = () => {
  const now = new Date();

  const pad = (n: number) => n.toString().padStart(2, "0");

  return `mi-cv-${
    now.getFullYear()
  }-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${
    pad(now.getHours())
  }-${pad(now.getMinutes())}-${pad(now.getSeconds())}.pdf`;
};

export const downloadMarkdownPdf = async (
  markdown: string
): Promise<void> => {
  const iframe = document.createElement("iframe");

  Object.assign(iframe.style, {
    position: "absolute",
    left: "-9999px",
    width: "800px",
    height: "auto",
    border: "none",
  });

  document.body.appendChild(iframe);

  const doc = iframe.contentDocument!;
  const html = await marked.parse(markdown);

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 24px;
            font-family: Arial, sans-serif;
            background: white;
            color: black;
            line-height: 1.5;
          }

          h1, h2, h3 {
            margin-top: 20px;
            margin-bottom: 10px;
          }

          p {
            margin: 8px 0;
          }

          ul {
            padding-left: 20px;
          }

          strong {
            font-weight: bold;
          }
        </style>
      </head>
      <body>${html}</body>
    </html>
  `);
  doc.close();

  try {
    const canvas = await html2canvas(doc.body, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;
    const margin = 10;

    const imgWidth = pdfWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = margin;

    pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight - margin * 2;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight - margin * 2;
    }

    pdf.save(getFileName());
  } finally {
    document.body.removeChild(iframe);
  }
};