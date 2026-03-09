"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Rocket,
  CheckCircle2,
  BarChart3,
  ArrowRight
} from "lucide-react"

const benefitsForCompanies = [
  {
    icon: Users,
    title: "Доступ к талантам",
    description: "Находите лучших молодых специалистов, которые уже доказали свои навыки на практике, решая ваши реальные бизнес-кейсы.",
  },
  {
    icon: BarChart3,
    title: "Объективная оценка",
    description: "Наша AI-система анализирует решения кандидатов по десяткам критериев, экономя время ваших HR-менеджеров.",
  },
  {
    icon: Rocket,
    title: "HR-брендинг",
    description: "Расскажите тысячам студентов и выпускников о вашей компании, культуре и задачах, которые вы решаете.",
  },
]

const whatWeOffer = [
  "Размещение ваших кейсов на платформе",
  "Профиль компании с аналитикой просмотров",
  "Автоматизированный скоринг решений",
  "Прямой доступ к контактам лучших исполнителей",
  "Интеграция с вашей ATS системой",
]

const whyItWorks = [
  {
    title: "Для компаний",
    points: [
      "Дешевле классического рекрутинга",
      "Проверка навыков 'в бою'",
      "Формирование кадрового резерва",
    ]
  },
  {
    title: "Для талантов",
    points: [
      "Опыт работы с реальными задачами",
      "Прямой путь в топовые компании",
      "Понятные критерии успеха",
    ]
  }
]

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.22_260/0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                  Для бизнеса и HR
                </Badge>
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl text-balance">
                  Находите <span className="text-primary">таланты</span> через реальные задачи
                </h1>
                <p className="mb-8 text-xl text-muted-foreground text-balance">
                  CareerStart — это мост между вашим бизнесом и амбициозными специалистами. Перестаньте искать по резюме, начните нанимать по результатам.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Стать партнёром
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20">
                   <Building2 className="h-48 w-48 text-primary/40 animate-pulse" />
                   {/* Decorative elements */}
                   <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-white shadow-xl flex items-center justify-center animate-bounce duration-[3000ms]">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                   </div>
                   <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-white shadow-xl flex items-center justify-center animate-bounce duration-[4000ms]">
                      <TrendingUp className="h-12 w-12 text-blue-500" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Что мы предлагаем компаниям</h2>
              <p className="mt-4 text-lg text-muted-foreground">Инструменты для эффективного найма и развития бренда</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {benefitsForCompanies.map((benefit) => (
                <Card key={benefit.title} className="border-none bg-muted/50 transition-transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <benefit.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mutual Benefits / Win-Win */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold">Почему это выгодно всем?</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {whyItWorks.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-background p-8 shadow-sm">
                  <h3 className="mb-6 text-2xl font-bold text-primary">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-lg font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
               <div className="rounded-full bg-primary/10 px-6 py-2 text-primary font-bold flex items-center gap-2">
                 <Zap className="h-4 w-4" />
                 Идеальный мэтч гарантирован
               </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-primary p-8 md:p-16 text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Готовы масштабировать свой наем?</h2>
                  <p className="text-lg text-primary-foreground/80 mb-8 italic">
                    "CareerStart помог нам закрыть 15 вакансий в отдел разработки за один месяц, при этом качество кандидатов было выше, чем при обычном поиске." — CTO топового Финтех-проекта.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {whatWeOffer.map((offer) => (
                      <li key={offer} className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-white/60" />
                        <span>{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-6">Оставьте заявку</h3>
                  <div className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <label>Название компании</label>
                      <input className="w-full bg-white/10 border border-white/20 rounded-md p-2 outline-none focus:border-white" placeholder="ООО Инновации" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <label>Email</label>
                      <input className="w-full bg-white/10 border border-white/20 rounded-md p-2 outline-none focus:border-white" placeholder="hr@company.com" />
                    </div>
                    <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold">
                       Отправить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
