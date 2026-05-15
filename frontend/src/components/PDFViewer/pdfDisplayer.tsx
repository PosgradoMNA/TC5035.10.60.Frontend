import { useMemo } from 'react';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
import TextType from '../../reactbits/components/TextType';
import React from 'react';

type PDFDisplayerProps = {
  file: File | null;
};

const PDFDisplayer = ({
  file,
}: PDFDisplayerProps) => {

  const pdfUrl = useMemo(() => {
    if (!file) return null;

    return URL.createObjectURL(file);
  }, [file]);

  console.log(pdfUrl);

  return (
    <div className="flex h-screen w-[480px] items-center justify-center overflow-hidden rounded-xl border border-neutral-300 bg-neutral-50">

      {pdfUrl ? (
        <PDFViewer
          config={{
            src: pdfUrl,

            theme: {
              preference: 'light',
            },
          }}
        />
      ) : (
        <p className="text-neutral-500">
            <TextType 
            text={["Welcome to CVSync", "Click the button and upload your CV!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            />
        </p>
      )}

    </div>
  );
};

export default PDFDisplayer;