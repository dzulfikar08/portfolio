import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Temporary mock data until we implement proper storage
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

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <Card key={experience.id}>
            <CardHeader>
              <CardTitle>{experience.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{experience.company}</p>
              <p className="text-sm text-muted-foreground">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="mt-2">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

