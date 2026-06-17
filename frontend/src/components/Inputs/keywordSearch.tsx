import { Field } from "../../reactbits/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../reactbits/components/ui/input-group"
import { SearchIcon } from "lucide-react"
import React, { useState } from "react"
import { keywordsToLambda } from "../../services/sendKeywordsToLambda"
import JobsAccordion from "../Buttons/accordionButton"
import type { Job } from "../../types/Job"

type PDFDisplayerProps = {
  file: File | null,
  openDrawer: (markdown: string) => void;
}

export function AIRecommendations({
  file,
  openDrawer
}: PDFDisplayerProps) {
  const [keywords, setKeywords] = useState("")
  const [jobs, setJobs] = useState<Job[]>([])

  const handleSubmit = async () => {
    if (!file) return

    try {
      const response = await keywordsToLambda(file, keywords)

      console.log(response)

      setJobs(response.job_list.response.results || [])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Buscador fijo */}
      <div className="mb-4">
        <Field>
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
              }}
            />
          </InputGroup>
        </Field>
      </div>

      {/* Resultados con scroll */}
      <div className="flex-1 overflow-y-auto border rounded-md p-2">
        <JobsAccordion jobs={jobs} file={file} openDrawer={openDrawer}/>
      </div>

    </div>
  )
}