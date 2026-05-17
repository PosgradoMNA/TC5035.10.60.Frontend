import './App.css';
import UploadButton from './components/Buttons/uploadButton';
import { useState } from 'react';
import PDFDisplayer from './components/PDFViewer/pdfDisplayer';
import React from 'react';
import ToggleModeButton from './components/Buttons/toggleModeButton';

function App() {
  const [pdfFile, setPdfFile] =
    useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file);

    setPdfFile(file);
  };

  return (
    <div className="app">
      <h1 className="title">CVSync</h1>
      <hr className="divider" />

      {/*Content container */}
      <div className="flex gap-6 h-[80vh]">
        
        {/*Left container */}
        <div className="w-1/2">
          <UploadButton onFileUpload={handleFileUpload}/>
          <PDFDisplayer file={pdfFile}/>
        </div>

        {/*Right container */}
        <div className="w-1/2">
          <div className="flex w-[440px] h-[560px] items-center justify-center overflow-auto rounded-xl border border-neutral-300 bg-neutral-50 p-4">
          {/*Toggle functionalilty mode */}
          <ToggleModeButton/>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;