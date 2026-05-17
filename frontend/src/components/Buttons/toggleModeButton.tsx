import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../reactbits/components/ui/toggle-group"

import { LinkIcon, BrainIcon } from 'lucide-react';
import React from "react"

export function ToggleModeButton() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup defaultValue={["asc"]} variant="outline" size="sm">
        <ToggleGroupItem value="asc" aria-label="Sort ascending">
          <LinkIcon />
          Job link
        </ToggleGroupItem>
        <ToggleGroupItem value="desc" aria-label="Sort descending">
          <BrainIcon />
          AI Recommendations
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default ToggleModeButton;