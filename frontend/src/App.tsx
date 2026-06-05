import './App.css';
import UploadButton from './components/Buttons/uploadButton';
import { useState } from 'react';
import PDFDisplayer from './components/PDFViewer/pdfDisplayer';
import React from 'react';
import ToggleModeButton from './components/Buttons/toggleModeButton';
import { SearchButton } from './components/Inputs/searchButton'
import { JobDescriptionDump } from './components/Inputs/jobDescriptionDump'
import { AIRecommendations } from './components/Inputs/keywordSearch';

function App() {
  const [pdfFile, setPdfFile] =
    useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    console.log("Uploaded file:", file);

    setPdfFile(file);
  };

  const [mode, setMode] = useState<string[]>(["asc"])

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
        {/*Toggle functionalilty mode */}
          <ToggleModeButton mode={mode} setMode={setMode} />
          
          <div className="flex w-[440px] h-[560px] items-center justify-center overflow-auto rounded-xl border border-neutral-300 bg-neutral-50 p-4">
          {/*Conditional Render */}
          {mode.includes("link") && <SearchButton file={pdfFile} />}
          {mode.includes("description") && <JobDescriptionDump file={pdfFile} />}
          {mode.includes("recommendations") && (<AIRecommendations file={pdfFile} />)}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;