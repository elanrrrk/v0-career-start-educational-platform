import { BookOpen, Code2, Trophy, Rocket } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    title: "Выбери направление",
    description: "Изучи роадмап и определи свой карьерный путь",
    color: "primary",
  },
  {
    icon: Code2,
    title: "Реши кейсы",
    description: "Работай над реальными задачами от компаний",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Попади в рейтинг",
    description: "Получай баллы и поднимайся в топ",
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Получи оффер",
    description: "Компании сами приглашают лучших",
    color: "accent",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Как это работает
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Четыре шага от студента без опыта до оффера мечты
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-12 hidden h-0.5 w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-${step.color}/10 ring-4 ring-background`}>
                  <step.icon className={`h-8 w-8 text-${step.color}`} />
                </div>
                <span className="mb-2 text-sm font-medium text-muted-foreground">
                  Шаг {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
