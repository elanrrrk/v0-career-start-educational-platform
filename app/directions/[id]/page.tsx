import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SkillsRadarChart } from "@/components/charts/skills-radar-chart"
import { getDirectionById, directions } from "@/lib/data/directions"
import { ArrowRight, Users, Briefcase, TrendingUp, CheckCircle2, Circle } from "lucide-react"

export function generateStaticParams() {
  return directions.map((direction) => ({
    id: direction.id,
  }))
}

interface DirectionPageProps {
  params: Promise<{ id: string }>
}

export default async function DirectionPage({ params }: DirectionPageProps) {
  const { id } = await params
  const direction = getDirectionById(id)

  if (!direction) {
    notFound()
  }

  const Icon = direction.icon

  const formatSalary = (value: number) => {
    return new Intl.NumberFormat("ru-RU").format(value)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-card/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/directions" className="hover:text-foreground">
                Направления
              </Link>
              <span>/</span>
              <span className="text-foreground">{direction.title}</span>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {direction.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h1 className="mb-4 text-4xl font-bold">{direction.title}</h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  {direction.description}
                </p>
              </div>

              {/* Salary Widget */}
              <Card className="w-full border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 lg:w-80">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Зарплатная вилка</span>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary">
                      {formatSalary(direction.salary.min)} - {formatSalary(direction.salary.max)} ₽
                    </div>
                    <p className="text-sm text-muted-foreground">в месяц</p>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{direction.students.toLocaleString("ru-RU")} студентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{direction.cases} кейсов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold">Роадмап обучения</h2>
            <div className="relative">
              <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-border" />
              <div className="space-y-6">
                {direction.roadmap.map((step, index) => (
                  <div key={step.title} className="relative flex gap-6">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                      {step.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <Card className={`flex-1 ${step.completed ? "border-primary/30" : ""}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Шаг {index + 1}</span>
                          {step.completed && (
                            <Badge variant="secondary" className="text-xs">
                              Завершён
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-border bg-card/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold">Необходимые навыки</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Карта навыков</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillsRadarChart skills={direction.skills} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Детализация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {direction.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <Badge variant={skill.type === "hard" ? "default" : "secondary"}>
                          {skill.type === "hard" ? "Hard" : "Soft"}
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sticky bottom-0 border-t border-border bg-background/95 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div>
              <p className="font-semibold">{direction.title}</p>
              <p className="text-sm text-muted-foreground">{direction.cases} кейсов доступно</p>
            </div>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent" asChild>
              <Link href={`/cases?direction=${direction.id}`}>
                Решать кейсы
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
