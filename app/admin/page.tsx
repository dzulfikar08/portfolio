"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Experience {
  id: string
  title: string
  company: string
  description: string
  startDate: string
  endDate: string
}

export default function AdminPage() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    fetch('/api/experiences')
      .then(res => res.json())
      .then(data => setExperiences(data))
  }, [])

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now().toString(),
        title: "",
        company: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ])
  }

  const handleInputChange = (index: number, field: keyof Experience, value: string) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value }
    setExperiences(updatedExperiences)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/experiences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experiences),
    })
    if (response.ok) {
      alert("Experiences updated successfully!")
    } else {
      alert("Failed to update experiences")
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <Card key={experience.id} className="mb-6">
            <CardHeader>
              <CardTitle>Experience {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor={`title-${index}`}>Title</Label>
                  <Input
                    id={`title-${index}`}
                    value={experience.title}
                    onChange={(e) => handleInputChange(index, "title", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    value={experience.company}
                    onChange={(e) => handleInputChange(index, "company", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Textarea
                    id={`description-${index}`}
                    value={experience.description}
                    onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                    <Input
                      id={`startDate-${index}`}
                      type="date"
                      value={experience.startDate}
                      onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <Input
                      id={`endDate-${index}`}
                      type="date"
                      value={experience.endDate}
                      onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button type="button" onClick={handleAddExperience} className="mr-4">
          Add Experience
        </Button>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  )
}

