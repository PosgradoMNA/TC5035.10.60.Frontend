import React from "react";
import { Button } from "../../reactbits/components/ui/button";
import {sendToLambda} from "../../services/sendPayloadToLambda"

type JobDescriptionProps = {
  file: File | null,
  jobDescription: string,
  openDrawer: (markdown: string) => void;
};

export function DynamicRecommendationButton({
  file,
  jobDescription,
  openDrawer
}: JobDescriptionProps) {

  const handleSubmit = async () => {
    if (!file) return;

    try {
      const response = await sendToLambda(
        file,
        jobDescription,
        false
      );

      console.log(response);
      openDrawer(response.response);

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