"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { companies } from "@/lib/data/companies"
import { 
  Search, 
  Building2, 
  Users, 
  MapPin, 
  Star, 
  Briefcase,
  TrendingUp,
  Filter
} from "lucide-react"

const industries = ["Все", "Технологии", "Финтех", "E-commerce", "Маркетплейс", "Телеком", "Кибербезопасность", "Социальные сети"]

export default function CompaniesPage() {
  const [search, setSearch] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("Все")

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(search.toLowerCase()) ||
                         company.description.toLowerCase().includes(search.toLowerCase())
    const matchesIndustry = selectedIndustry === "Все" || company.industry === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_260/0.1),transparent_50%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                <Building2 className="mr-1 h-3 w-3" />
                {companies.length} компаний-партнёров
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Компании-<span className="text-primary">партнёры</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Решай кейсы от ведущих компаний России и получай приглашения на стажировку и работу
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск компаний..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Фильтры
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.map((company) => (
                <Link key={company.id} href={`/companies/${company.id}`}>
                  <Card className="group h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-xl font-bold text-primary">
                          {company.logo}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">{company.rating}</span>
                        </div>
                      </div>

                      <h3 className="mb-1 text-xl font-semibold group-hover:text-primary">
                        {company.name}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {company.industry}
                      </p>

                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {company.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {company.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{company.activeCases} кейсов</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span>{company.totalHires} наняли</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {company.employees}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {company.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredCompanies.length === 0 && (
              <div className="py-20 text-center">
                <Building2 className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-medium">Компании не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA for Companies */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold">Вы представитель компании?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Присоединяйтесь к платформе и находите талантливых специалистов через реальные задачи
            </p>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
              Стать партнёром
              <Building2 className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
