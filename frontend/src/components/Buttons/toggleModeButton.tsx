import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../reactbits/components/ui/toggle-group"

import { LinkIcon, PencilLine, BrainIcon } from "lucide-react"
import React from "react"

type Props = {
  mode: string[]
  setMode: React.Dispatch<React.SetStateAction<string[]>>
}

export function ToggleModeButton({ mode, setMode }: Props) {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup
        value={mode}
        onValueChange={(value) => setMode(value)}
        variant="outline"
        size="sm"
      >
        <ToggleGroupItem value="link" aria-label="Sort ascending">
          <LinkIcon />
          Job link
        </ToggleGroupItem>

        <ToggleGroupItem value="description" aria-label="Sort descending">
          <PencilLine />
          Job Description
        </ToggleGroupItem>

        <ToggleGroupItem value="recommendations" aria-label="Sort ascending">
          <BrainIcon />
          AI recommendations
        </ToggleGroupItem>

      </ToggleGroup>
    </div>
  )
}

export default ToggleModeButton