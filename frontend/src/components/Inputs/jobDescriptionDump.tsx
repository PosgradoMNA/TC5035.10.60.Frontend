import { Field } from "../../reactbits/components/ui/field"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "../../reactbits/components/ui/input-group"

import React, { useState } from "react"

export function JobDescriptionDump() {
  const [text, setText] = useState("")

  const handleClear = () => {
    setText("")
  }

  return (
    <Field className="max-w-xs">
      <InputGroup>

        <InputGroupTextarea
          placeholder="Share the job description..."
          className="min-h-24"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
          >
            Analyze job description
          </InputGroupButton>

        </InputGroupAddon>

      </InputGroup>
    </Field>
  )
}