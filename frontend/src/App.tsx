import './App.css';
import UploadButton from './components/Buttons/uploadButton';
import { useState } from 'react';
import PDFDisplayer from './components/PDFViewer/pdfDisplayer';

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

      <UploadButton
        onFileUpload={handleFileUpload}
      />

      <PDFDisplayer file={pdfFile}/>
    </div>
  );
}

export default App;