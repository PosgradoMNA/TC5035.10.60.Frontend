import { Field } from "../../reactbits/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../reactbits/components/ui/input-group"
import { SearchIcon } from 'lucide-react'
import React, {useState} from "react"
import {sendToLambda} from "../../services/sendPayloadToLambda"


type PDFDisplayerProps = {
  file: File | null;
};

export function SearchButton({
  file,
}: PDFDisplayerProps) {
  const [text, setText] = useState("")
  const handleSubmit = async () => {
    if (!file) return;

    try {
      const response = await sendToLambda(
        file,
        text,
        true
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Enter job link..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit()
            }
          }}/>
      </InputGroup>
    </Field>
  )
}
