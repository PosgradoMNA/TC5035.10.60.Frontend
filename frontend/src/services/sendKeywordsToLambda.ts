import {fileToBase64} from "../services/pdfToLambda"


export async function keywordsToLambda(file: File, keywords: string) {
  const pdfBase64 = await fileToBase64(file);

    let payload;
    
    payload = {
        cv_dump: pdfBase64,
        keywords: keywords
    }; 

  const response = await fetch(
    "https://3asvjlvesk.execute-api.us-west-2.amazonaws.com/development/JobListerWithScore",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "M5QcHPXx5bir1NXW6gqw2irtkc3Yftr2fqb4Ptl3"
      },
      body: JSON.stringify(payload)
    }
  );

  return response.json();
}
