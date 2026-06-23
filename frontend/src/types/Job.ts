export type Job = {
  jobId: number;
  employerName: string;
  jobTitle: string;
  locationName: string;
  minimumSalary?: number;
  maximumSalary?: number;
  jobDescription: string;
  ranking_score : number;
};