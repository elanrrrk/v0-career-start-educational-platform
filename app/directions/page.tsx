import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DirectionCard } from "@/components/directions/direction-card"
import { directions } from "@/lib/data/directions"
import { Badge } from "@/components/ui/badge"

const tags = ["Все", "Популярное", "Для новичков", "Много вакансий", "Высокие зарплаты"]

export default function DirectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold">Направления</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Выбери свой карьерный путь и начни решать реальные кейсы от топовых компаний
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={tag}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {directions.map((direction) => (
                <DirectionCard key={direction.id} direction={direction} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
