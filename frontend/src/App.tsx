import './App.css';
import UploadButton from './components/Buttons/uploadButton';
import { useState } from 'react';
import PDFDisplayer from './components/PDFViewer/pdfDisplayer';
import React from 'react';

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
          
        </div>
      
      </div>
    </div>
  );
}

export default App;