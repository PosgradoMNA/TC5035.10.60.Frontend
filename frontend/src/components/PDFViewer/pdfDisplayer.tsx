import { useMemo } from 'react';

import { PDFViewer } from '@embedpdf/react-pdf-viewer';

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
          Please upload your CV
        </p>
      )}

    </div>
  );
};

export default PDFDisplayer;