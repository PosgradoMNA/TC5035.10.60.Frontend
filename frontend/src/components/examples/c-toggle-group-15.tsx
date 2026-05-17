import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup defaultValue={["asc"]} variant="outline" size="sm">
        <ToggleGroupItem value="asc" aria-label="Sort ascending">
          <ArrowUpIcon
          />
          Ascending
        </ToggleGroupItem>
        <ToggleGroupItem value="desc" aria-label="Sort descending">
          <ArrowDownIcon
          />
          Descending
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}