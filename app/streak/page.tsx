"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StreakWidget } from "@/components/ui/streak-flame"
import { 
  Trophy, Star, Zap, Users, Target, ShieldCheck, 
  Crown, Medal, TrendingUp, Flame
} from "lucide-react"

const streakData = {
  streak: 14,
  maxStreak: 21,
  weeklyActivity: [true, true, true, false, true, true, true],
}

const leaderboard = [
  { name: "Алексей Иванов", streak: 45, level: 24, rank: 1 },
  { name: "Мария Петрова", streak: 32, level: 18, rank: 2 },
  { name: "Дмитрий Соколов", streak: 28, level: 15, rank: 3 },
  { name: "Елена Кузнецова", streak: 14, level: 12, rank: 4 }, // User
  { name: "Сергей Волков", streak: 12, level: 10, rank: 5 },
]

const benefits = [
  {
    icon: Zap,
    title: "Множитель XP",
    description: "Чем длиннее ваш streak, тем больше опыта вы получаете за каждый решенный кейс.",
    multiplier: "x1.5",
  },
  {
    icon: Trophy,
    title: "Эксклюзивные кейсы",
    description: "Открывайте доступ к премиальным задачам от топовых компаний при достижении 7-дневного streak.",
    multiplier: "VIP",
  },
  {
    icon: ShieldCheck,
    title: "Приоритет в найме",
    description: "Компании видят вашу дисциплину. Профили со streak 30+ дней получают в 3 раза больше откликов.",
    multiplier: "TOP",
  },
]

export default function StreakPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                <Flame className="h-10 w-10 fill-current" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Твой <span className="text-orange-500">Streak</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Дисциплина — это ключ к успешной карьере. Поддерживай огонь каждый день!
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Streak Stats */}
              <div className="space-y-6 lg:col-span-2">
                <StreakWidget 
                  streak={streakData.streak}
                  maxStreak={streakData.maxStreak}
                  weeklyActivity={streakData.weeklyActivity}
                />

                <div className="grid gap-6 sm:grid-cols-3">
                  {benefits.map((benefit) => (
                    <Card key={benefit.title} className="relative overflow-hidden">
                      <div className="absolute right-2 top-2">
                        <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                          {benefit.multiplier}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                          <benefit.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mb-2 font-bold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      Таблица лидеров (Streak)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboard.map((user, index) => (
                        <div
                          key={user.name}
                          className={`flex items-center justify-between rounded-lg p-3 ${
                            user.name === "Елена Кузнецова" ? "bg-primary/5 border border-primary/20" : "bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="flex h-6 w-6 items-center justify-center text-sm font-bold text-muted-foreground">
                              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                            </span>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 text-sm font-bold">
                              {user.name[0]}
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground">Уровень {user.level}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-orange-500">{user.streak}</span>
                            <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-6 w-full">
                      Показать всех участников
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Как это работает?</h3>
                    <ul className="mt-4 space-y-3 text-sm text-primary-foreground/90">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        Решай хотя бы один кейс в день, чтобы поддерживать streak.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        Пропуск одного дня сбрасывает счетчик до нуля.
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        Используй "Защиту Streak" (доступно в магазине), если знаешь, что пропустишь день.
                      </li>
                    </ul>
                    <Button className="mt-6 w-full bg-white text-primary hover:bg-white/90">
                      Купить защиту
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Интересный факт</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Пользователи со streak более 14 дней находят работу на 45% быстрее, так как работодатели ценят стабильность и упорство.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Статистика платформы</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
