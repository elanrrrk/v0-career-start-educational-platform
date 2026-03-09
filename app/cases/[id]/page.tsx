import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CaseSidebar } from "@/components/cases/case-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getCaseById, cases } from "@/lib/data/cases"
import { Building2, BookOpen, Upload, Link2, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return cases.map((c) => ({
    id: c.id,
  }))
}

interface CasePageProps {
  params: Promise<{ id: string }>
}

const difficultyConfig = {
  easy: { label: "Легкий", color: "bg-green-500/10 text-green-500" },
  medium: { label: "Средний", color: "bg-yellow-500/10 text-yellow-500" },
  hard: { label: "Сложный", color: "bg-red-500/10 text-red-500" },
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params
  const caseData = getCaseById(id)

  if (!caseData) {
    notFound()
  }

  const difficulty = difficultyConfig[caseData.difficulty]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-card/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/cases" className="hover:text-foreground">
                Кейсы
              </Link>
              <span>/</span>
              <span className="text-foreground">{caseData.title}</span>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <Building2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Компания</p>
                    <p className="font-semibold">{caseData.company}</p>
                  </div>
                </div>
                <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{caseData.title}</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge className={difficulty.color}>{difficulty.label}</Badge>
                  {caseData.requirements.map((req) => (
                    <Badge key={req} variant="outline">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Side - Description */}
              <div className="space-y-8 lg:col-span-2">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>Описание задания</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-invert max-w-none">
                      {caseData.fullDescription.split("\n").map((line, i) => {
                        if (line.startsWith("## ")) {
                          return (
                            <h2 key={i} className="mb-4 mt-6 text-xl font-bold first:mt-0">
                              {line.replace("## ", "")}
                            </h2>
                          )
                        }
                        if (line.startsWith("### ")) {
                          return (
                            <h3 key={i} className="mb-3 mt-4 text-lg font-semibold">
                              {line.replace("### ", "")}
                            </h3>
                          )
                        }
                        if (line.startsWith("- ")) {
                          return (
                            <li key={i} className="ml-4 text-muted-foreground">
                              {line.replace("- ", "")}
                            </li>
                          )
                        }
                        if (line.trim()) {
                          return (
                            <p key={i} className="mb-2 text-muted-foreground">
                              {line}
                            </p>
                          )
                        }
                        return null
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Theory */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Освежить знания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {caseData.theory.map((item) => (
                        <Card key={item.title} className="cursor-pointer transition-colors hover:border-primary/50">
                          <CardContent className="p-4">
                            <h4 className="mb-1 font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Submission Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Отправить решение</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Ссылка на решение
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            placeholder="https://github.com/username/project"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Файлы (опционально)
                      </label>
                      <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:border-primary/50">
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                          <p className="mt-2 text-sm text-muted-foreground">
                            Перетащите файлы или нажмите для загрузки
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Комментарий
                      </label>
                      <Textarea
                        placeholder="Опишите ваше решение, использованные подходы и технологии..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent">
                      Отправить решение
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Sticky Sidebar */}
              <div className="lg:sticky lg:top-24">
                <CaseSidebar deadline={caseData.deadline} points={caseData.points} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
