import path from 'path';
import { promises as fs } from 'fs';

export interface Experiences {
  work: Work[];
  other: Other[];
}

export type Work = {
  id: number;
  period: string;
  company: string;
  tenureDetails: string;
  tenureDuration?: string;
  inProgress: boolean;
};

export type Other = {
  id: number;
  period: string;
  role: string;
  projects?: Project[];
  details?: string;
  inProgress: boolean;
};

export type Project = {
  name: string;
  link: string;
  docs: string;
};

export async function getExperiencies(): Promise<Experiences> {
  const filePath = path.join(process.cwd(), 'data', 'experiences.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
