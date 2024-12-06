"use server"

import fs from "fs/promises"
import path from "path"

export async function updateExperiences(experiences: any[]) {
  const filePath = path.join(process.cwd(), "data", "experiences.json")
  await fs.writeFile(filePath, JSON.stringify(experiences, null, 2))
}

