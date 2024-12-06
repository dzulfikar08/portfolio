import { promises as fs } from 'fs'
import path from 'path'

export interface Experience {
  id: string
  title: string
  company: string
  description: string
  startDate: string
  endDate: string
}

export async function getExperiences(): Promise<Experience[]> {
  const filePath = path.join(process.cwd(), 'data', 'experiences.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function updateExperiences(experiences: Experience[]): Promise<void> {
  const filePath = path.join(process.cwd(), 'data', 'experiences.json')
  await fs.writeFile(filePath, JSON.stringify(experiences, null, 2))
}

