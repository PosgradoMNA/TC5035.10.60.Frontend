import {fileToBase64} from "../services/pdfToLambda"

const API_URL = import.meta.env.VITE_AWS_LAMBDA_JOB_LISTER_WITH_SCORE_ENDPOINT;
const API_KEY = import.meta.env.VITE_AWS_LAMBDA_API_KEY;

export async function keywordsToLambda(file: File, keywords: string) {
  const pdfBase64 = await fileToBase64(file);

    let payload;
    
    payload = {
        cv_dump: pdfBase64,
        keywords: keywords
    }; 

    console.log(payload)

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
