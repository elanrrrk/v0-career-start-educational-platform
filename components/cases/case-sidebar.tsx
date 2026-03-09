"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, TrendingUp, Medal, Crown, Award } from "lucide-react"

interface CaseSidebarProps {
  deadline: Date
  points: number
}

const topUsers = [
  { rank: 1, name: "Алексей М.", points: 2450, avatar: "А" },
  { rank: 2, name: "Мария К.", points: 2380, avatar: "М" },
  { rank: 3, name: "Дмитрий С.", points: 2290, avatar: "Д" },
  { rank: 4, name: "Екатерина В.", points: 2150, avatar: "Е" },
  { rank: 5, name: "Иван П.", points: 2080, avatar: "И" },
]

const currentUser = {
  rank: 47,
  name: "Вы",
  points: 850,
  nextLevelPoints: 1000,
  avatar: "В",
}

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="h-4 w-4 text-yellow-500" />
  if (rank === 2) return <Medal className="h-4 w-4 text-gray-400" />
  if (rank === 3) return <Award className="h-4 w-4 text-amber-600" />
  return null
}

export function CaseSidebar({ deadline, points }: CaseSidebarProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = deadline.getTime() - Date.now()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [deadline])

  const progressToNextLevel =
    (currentUser.points / currentUser.nextLevelPoints) * 100

  return (
    <div className="space-y-6">
      {/* Countdown Timer */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4 text-primary" />
            До дедлайна
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { value: timeLeft.days, label: "дней" },
              { value: timeLeft.hours, label: "часов" },
              { value: timeLeft.minutes, label: "мин" },
              { value: timeLeft.seconds, label: "сек" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-background/50 p-2">
                <div className="text-2xl font-bold text-primary">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">{points} XP</span>
            <span className="text-sm text-muted-foreground">за решение</span>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Trophy className="h-4 w-4 text-primary" />
            Рейтинг участников
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topUsers.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-3 rounded-lg p-2 ${
                user.rank <= 3 ? "bg-primary/5" : ""
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center">
                {getRankIcon(user.rank) || (
                  <span className="text-sm font-medium text-muted-foreground">
                    {user.rank}
                  </span>
                )}
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                {user.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{user.name}</p>
              </div>
              <Badge variant="secondary" className="font-mono">
                {user.points.toLocaleString("ru-RU")}
              </Badge>
            </div>
          ))}

          {/* Current User */}
          <div className="border-t border-border pt-3">
            <div className="flex items-center gap-3 rounded-lg bg-accent/10 p-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  #{currentUser.rank}
                </span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                {currentUser.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{currentUser.name}</p>
                <div className="flex items-center gap-2">
                  <Progress value={progressToNextLevel} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground">
                    {currentUser.points}/{currentUser.nextLevelPoints}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span>
                До следующего уровня: {currentUser.nextLevelPoints - currentUser.points} XP
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
