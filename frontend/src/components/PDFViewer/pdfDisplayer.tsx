import React from 'react';

import { Document, Page, pdfjs } from 'react-pdf';

import TextType from '../../reactbits/components/TextType';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type PDFDisplayerProps = {
  file: File | null;
};

const PDFDisplayer = ({
  file,
}: PDFDisplayerProps) => {

  return (
    <div className="flex h-screen w-[480px] items-center justify-center overflow-auto rounded-xl border border-neutral-300 bg-neutral-50 p-4">

      {file ? (
        <Document file={file}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <div className="text-neutral-500 text-center">
          <TextType
            text={[
              "Welcome to CVSync",
              "Click the button and upload your CV!"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
      )}

    </div>
  );
};

export default PDFDisplayer;