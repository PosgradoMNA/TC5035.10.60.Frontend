import {fileToBase64} from "../services/pdfToLambda"

const API_URL = import.meta.env.VITE_AWS_LAMBDA_CV_OPTIMIZER_ENDPOINT;
const API_KEY = import.meta.env.VITE_AWS_LAMBDA_API_KEY;

export async function sendToLambda(file: File, text: string, isLink: boolean) {
  const pdfBase64 = await fileToBase64(file);

    let payload;
    
    if (isLink){
        payload = {
            cv_dump: pdfBase64,
            url: text
        };
    } else {
        payload = {
            cv_dump: pdfBase64,
            job_dump: text
        };
    } 

  const response = await fetch(
    API_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify(payload)
    }
  );

  return response.json();
}
