import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CaseCard } from "@/components/cases/case-card"
import { cases } from "@/lib/data/cases"
import { Badge } from "@/components/ui/badge"

const difficultyFilters = ["Все", "Легкий", "Средний", "Сложный"]
const directionFilters = ["Все", "Frontend", "Design", "Analytics", "Backend"]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold">Кейсы</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Решай реальные задачи от топовых компаний и получай баллы для рейтинга
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Сложность:</span>
                {difficultyFilters.map((filter, index) => (
                  <Badge
                    key={filter}
                    variant={index === 0 ? "default" : "outline"}
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Направление:</span>
                {directionFilters.map((filter, index) => (
                  <Badge
                    key={filter}
                    variant={index === 0 ? "default" : "outline"}
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseData) => (
                <CaseCard key={caseData.id} caseData={caseData} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
