"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { StreakWidget } from "@/components/ui/streak-flame"
import { 
  Flame, Trophy, Star, Eye, MessageSquare, CheckCircle2, 
  Briefcase, TrendingUp, ExternalLink, Building2
} from "lucide-react"

const profileData = {
  name: "Алексей Иванов",
  avatar: "А",
  level: 12,
  xp: 2450,
  nextLevelXp: 3000,
  streak: 14,
  completedCases: 23,
  rank: 47,
  badges: ["Early Adopter", "10 Cases", "Top 100"],
}

const streakDays = [
  { day: "Пн", active: true },
  { day: "Вт", active: true },
  { day: "Ср", active: true },
  { day: "Чт", active: false },
  { day: "Пт", active: true },
  { day: "Сб", active: true },
  { day: "Вс", active: true },
]

const completedCases = [
  {
    title: "Редизайн страницы товара",
    company: "Ozon",
    score: 92,
    date: "2 дня назад",
  },
  {
    title: "Дашборд аналитики",
    company: "Яндекс",
    score: 88,
    date: "неделю назад",
  },
  {
    title: "REST API для маркетплейса",
    company: "Авито",
    score: 95,
    date: "2 недели назад",
  },
]

const feedback = [
  {
    company: "Ozon",
    text: "Отличное решение! Особенно понравилась реализация галереи.",
    rating: 5,
    date: "3 дня назад",
  },
  {
    company: "Яндекс",
    text: "Хорошая работа с данными, но можно улучшить UI.",
    rating: 4,
    date: "неделю назад",
  },
]

const activity = [
  {
    company: "Тинькофф",
    action: "просмотрел ваш профиль",
    time: "2 часа назад",
  },
  {
    company: "Сбер",
    action: "оценил ваше решение",
    time: "вчера",
  },
  {
    company: "VK",
    action: "добавил в избранное",
    time: "3 дня назад",
  },
]

export default function ProfilePage() {
  const [isOpenToWork, setIsOpenToWork] = useState(true)

  const progressToNextLevel = (profileData.xp / profileData.nextLevelXp) * 100

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground">
                      {profileData.avatar}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{profileData.name}</h1>
                      <div className="mt-1 flex items-center gap-3">
                        <Badge variant="secondary">
                          Уровень {profileData.level}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          #{profileData.rank} в рейтинге
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profileData.badges.map((badge) => (
                          <Badge key={badge} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Open to Work</span>
                      <Switch
                        checked={isOpenToWork}
                        onCheckedChange={setIsOpenToWork}
                      />
                    </div>
                    <Button variant="outline">Редактировать</Button>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс до уровня {profileData.level + 1}</span>
                    <span className="font-medium">{profileData.xp} / {profileData.nextLevelXp} XP</span>
                  </div>
                  <Progress value={progressToNextLevel} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-6 lg:col-span-2">
                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-4">
                  {[
                    { icon: Flame, label: "Streak", value: `${profileData.streak} дней`, color: "text-orange-500" },
                    { icon: CheckCircle2, label: "Кейсов", value: profileData.completedCases, color: "text-green-500" },
                    { icon: Trophy, label: "Рейтинг", value: `#${profileData.rank}`, color: "text-yellow-500" },
                    { icon: Star, label: "XP", value: profileData.xp.toLocaleString("ru-RU"), color: "text-primary" },
                  ].map((stat) => (
                    <Card key={stat.label}>
                      <CardContent className="flex items-center gap-3 p-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${stat.color}`}>
                          <stat.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-lg font-bold">{stat.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Streak Tracker with Duolingo-style flame */}
                <StreakWidget 
                  streak={profileData.streak}
                  maxStreak={21}
                  weeklyActivity={streakDays.map(d => d.active)}
                />

                {/* Portfolio */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Портфолио решений
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {completedCases.map((caseItem) => (
                      <div
                        key={caseItem.title}
                        className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{caseItem.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {caseItem.company} • {caseItem.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-primary/10 text-primary">
                            {caseItem.score}/100
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Feedback */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Отзывы от компаний
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {feedback.map((item, index) => (
                      <div key={index} className="rounded-lg border border-border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium">{item.company}</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < item.rating
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Activity */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      Активность
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activity.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-muted/50 p-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{item.company}</span>{" "}
                            {item.action}
                          </p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Смотреть все
                    </Button>
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
