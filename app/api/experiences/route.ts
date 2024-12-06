import { NextRequest,NextResponse } from 'next/server'

export const runtime = 'edge'
// In a real application, you would use Cloudflare KV or D1 for storage
const experiences = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Corp",
    description: "Developed and maintained web applications using React and Node.js",
    startDate: "2020-01-01",
    endDate: "2022-12-31"
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Web Solutions Inc",
    description: "Created responsive user interfaces and implemented complex UI components",
    startDate: "2018-06-01",
    endDate: "2019-12-31"
  }
]

export async function GET() {
  return NextResponse.json(experiences)
}

export async function POST(request: NextRequest) {
  const newExperiences = await request.json()
  // In a real application, you would save to Cloudflare KV or D1 here
  return NextResponse.json({ ...newExperiences, success: true,  })
}

