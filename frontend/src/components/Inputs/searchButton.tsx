import { Field } from "../../reactbits/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../reactbits/components/ui/input-group"
import { SearchIcon } from 'lucide-react'
import React from "react"

export function SearchButton() {
  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Enter job link..." />
      </InputGroup>
    </Field>
  )
}
