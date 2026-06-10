import * as React from "react";
import { Accordion } from "@base-ui/react/accordion";
import type { Job } from "../../types/Job";


type Props = {
  jobs: Job[];
};

export default function JobsAccordion({ jobs }: Props) {
  return (
    <Accordion.Root>
      {jobs.map((job) => (
        <Accordion.Item key={job.jobId}>
          <Accordion.Header>
            <Accordion.Trigger>
              {job.jobTitle}
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