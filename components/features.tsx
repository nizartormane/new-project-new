import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "React 19",
      description: "Built with the latest React 19 features including improved Suspense and automatic batching.",
    },
    {
      title: "Docker",
      description: "Containerized with Docker for consistent development and deployment environments.",
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated testing, building, and deployment with GitHub Actions.",
    },
    {
      title: "Next.js App Router",
      description: "Modern routing with server components and client components working together seamlessly.",
    },
  ]

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Project Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

