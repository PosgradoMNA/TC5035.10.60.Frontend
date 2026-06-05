import { Field } from "../../reactbits/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../reactbits/components/ui/input-group"
import { SearchIcon } from 'lucide-react'
import React, {useState} from "react"
import {keywordsToLambda} from "../../services/sendKeywordsToLambda"


type PDFDisplayerProps = {
  file: File | null;
}; 

export function AIRecommendations({
  file,
}: PDFDisplayerProps) {
  const [keywords, setKeywords] = useState("")
  const handleSubmit = async () => {
    if (!file) return;

    try {
      const response = await keywordsToLambda(
        file,
        keywords
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
          placeholder="Search the job you want..."
          onChange={(e) => setKeywords(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit()
            }
          }}/>
      </InputGroup>
    </Field>
  )
}
