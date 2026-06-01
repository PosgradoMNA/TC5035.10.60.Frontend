import {fileToBase64} from "../services/pdfToLambda"


export async function sendToLambda(file: File, text: string, isLink: boolean) {
  const pdfBase64 = await fileToBase64(file);

    let payload;
    
    if (isLink){
        payload = {
            pdf: pdfBase64,
            url: text
        };
    } else {
        payload = {
            pdf: pdfBase64,
            job_dump: text
        };
    } 

  const response = await fetch(
    "https://3asvjlvesk.execute-api.us-west-2.amazonaws.com/development/optimize-cv",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  return response.json();
}