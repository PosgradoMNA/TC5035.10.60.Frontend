import React from "react";
import { Button } from "../../reactbits/components/ui/button";
import { keywordsToLambda } from "../../services/sendKeywordsToLambda";

type JobDescriptionProps = {
  file: File | null;
  jobDescription: string;
};

export function DynamicRecommendationButton({
  file,
  jobDescription,
}: JobDescriptionProps) {

  const handleSubmit = async () => {
    if (!file) return;

    try {
      const response = await keywordsToLambda(
        file,
        jobDescription
      );

      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleSubmit}>
      Generate CV
    </Button>
  );
}