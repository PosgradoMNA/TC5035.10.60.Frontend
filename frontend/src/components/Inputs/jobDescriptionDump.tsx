import { Field } from "../../reactbits/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "../../reactbits/components/ui/input-group"
import React, { useState } from "react"
import {sendToLambda} from "../../services/sendPayloadToLambda"


type PDFDisplayerProps = {
  file: File | null;
};

export function JobDescriptionDump({
  file,
}: PDFDisplayerProps) {
  const [text, setText] = useState("")

  const handleClear = () => {
    setText("")
  }

  const handleSubmit = async () => {
    if (!file) return;

    try {
      const response = await sendToLambda(
        file,
        text,
        false
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Field className="max-w-xs">
      <InputGroup>

        <InputGroupTextarea
          placeholder="Share the job description..."
          className="min-h-24"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        
        />

        <InputGroupAddon align="block-end">

          <InputGroupButton
            variant="secondary"
            size="sm"
            onClick={handleClear}
          >
            Clear
          </InputGroupButton>

          <InputGroupButton
            variant="default"
            size="sm"
            className="ml-auto"
            onClick={handleSubmit}
          >
            Analyze job description
          </InputGroupButton>

        </InputGroupAddon>

      </InputGroup>
    </Field>
  )
}