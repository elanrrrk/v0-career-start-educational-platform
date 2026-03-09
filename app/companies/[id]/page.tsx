import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCompanyById, companies } from "@/lib/data/companies"
import { cases } from "@/lib/data/cases"
import { 
  Building2, 
  Users, 
  MapPin, 
  Star, 
  Briefcase,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  Clock
} from "lucide-react"

export function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }))
}

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const company = getCompanyById(id)

  if (!company) {
    notFound()
  }

  const companyCases = cases.filter(c => c.company.toLowerCase().includes(company.name.toLowerCase().split(" ")[0]))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_260/0.1),transparent_50%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/companies" 
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Все компании
            </Link>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl font-bold text-primary">
                  {company.logo}
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <h1 className="text-3xl font-bold sm:text-4xl">{company.name}</h1>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="font-medium">{company.rating}</span>
                    </div>
                  </div>
                  <p className="mb-3 text-lg text-muted-foreground">{company.industry}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {company.employees} сотрудников
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Сайт компании
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                  Все кейсы
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>О компании</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{company.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {company.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cases from this company */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Активные кейсы ({company.activeCases})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {companyCases.length > 0 ? (
                      companyCases.slice(0, 3).map((caseItem) => (
                        <Link key={caseItem.id} href={`/cases/${caseItem.id}`}>
                          <div className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-primary/50 hover:bg-muted/50">
                            <div>
                              <h4 className="font-medium group-hover:text-primary">{caseItem.title}</h4>
                              <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                                <span>{caseItem.direction}</span>
                                <Badge variant={
                                  caseItem.difficulty === "easy" ? "secondary" :
                                  caseItem.difficulty === "medium" ? "default" : "destructive"
                                } className="text-xs">
                                  {caseItem.difficulty === "easy" ? "Легко" :
                                   caseItem.difficulty === "medium" ? "Средне" : "Сложно"}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {caseItem.duration}
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground">Кейсы от этой компании скоро появятся</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Преимущества работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {company.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">Статистика</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        Активных кейсов
                      </div>
                      <span className="font-semibold text-primary">{company.activeCases}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        Наняли через платформу
                      </div>
                      <span className="font-semibold text-green-500">{company.totalHires}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Star className="h-4 w-4" />
                        Рейтинг компании
                      </div>
                      <span className="font-semibold text-yellow-500">{company.rating}/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">Хочешь работать в {company.name}?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Реши кейсы компании и покажи свои навыки
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    Начать решать кейсы
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
