import * as React from "react";
import { Accordion } from "@base-ui/react/accordion";
import type { Job } from "../../types/Job";
import { DynamicRecommendationButton } from "./dynamicRecommendationButton";

type Props = {
  jobs: Job[];
  file: File | null;
  openDrawer: (markdown: string) => void;
};

export default function JobsAccordion({ jobs, file, openDrawer }: Props) {
  const sortedJobs = [...jobs].sort(
    (a, b) => b.ranking_score - a.ranking_score
  );

  return (
    <Accordion.Root>
      {sortedJobs.map((job) => (
        <Accordion.Item key={job.jobId}>
          <Accordion.Header>
            <Accordion.Trigger>
              {job.jobTitle} {job.ranking_score}
              <PlusIcon />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel>
            <div>
              <p>
                <strong>Company:</strong> {job.employerName}
              </p>

              <p>
                <strong>Location:</strong> {job.locationName}
              </p>

              <p>
                <strong>Salary:</strong>{" "}
                {job.minimumSalary && job.maximumSalary
                  ? `£${job.minimumSalary.toLocaleString()} - £${job.maximumSalary.toLocaleString()}`
                  : "Not specified"}
              </p>

              <p>
                <strong>Description:</strong>
              </p>

              <div
                dangerouslySetInnerHTML={{
                  __html: job.jobDescription,
                }}
              />

              <DynamicRecommendationButton
                file={file}
                jobDescription={job.jobDescription}
                openDrawer={openDrawer}
              />
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M1.5 8h13M8 14.5v-13" />
    </svg>
  );
}