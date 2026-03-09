import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

const studentPains = [
  {
    pain: "Нет опыта работы?",
    solution: "Решай кейсы от реальных компаний",
  },
  {
    pain: "Не берут без портфолио?",
    solution: "Собирай решения в профиль",
  },
  {
    pain: "Не знаешь, что учить?",
    solution: "Следуй нашим роадмапам",
  },
]

const companyPains = [
  {
    pain: "Сложно оценить джуна?",
    solution: "Смотрите на реальные решения",
  },
  {
    pain: "Долгий найм?",
    solution: "Приглашайте из топ-рейтинга",
  },
  {
    pain: "Текучка на испытательном?",
    solution: "Кандидаты знакомы с задачами",
  },
]

export function PainSolutionSection() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Решаем проблемы{" "}
            <span className="text-primary">обеих сторон</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            CareerStart создаёт мост между амбициозными студентами и компаниями в поиске талантов
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Для студентов
            </div>
            <div className="space-y-6">
              {studentPains.map((item) => (
                <div key={item.pain} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                      <XCircle className="h-5 w-5 text-destructive" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-3">
                    <span className="text-muted-foreground line-through">{item.pain}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="font-medium">{item.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              Для компаний
            </div>
            <div className="space-y-6">
              {companyPains.map((item) => (
                <div key={item.pain} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                      <XCircle className="h-5 w-5 text-destructive" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-3">
                    <span className="text-muted-foreground line-through">{item.pain}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-accent" />
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="font-medium">{item.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
