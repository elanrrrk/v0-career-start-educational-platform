"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Zap } from "lucide-react"
import type { Case } from "@/lib/data/cases"

interface CaseCardProps {
  caseData: Case
}

const difficultyConfig = {
  easy: { label: "Легкий", color: "bg-green-500/10 text-green-500" },
  medium: { label: "Средний", color: "bg-yellow-500/10 text-yellow-500" },
  hard: { label: "Сложный", color: "bg-red-500/10 text-red-500" },
}

export function CaseCard({ caseData }: CaseCardProps) {
  const daysLeft = Math.ceil(
    (caseData.deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  )

  const difficulty = difficultyConfig[caseData.difficulty]

  return (
    <Link href={`/cases/${caseData.id}`}>
      <Card className="group h-full cursor-pointer border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-bold text-muted-foreground">
              {caseData.company.charAt(0)}
            </div>
            <Badge className={difficulty.color}>{difficulty.label}</Badge>
          </div>

          <p className="mb-1 text-sm text-muted-foreground">{caseData.company}</p>
          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {caseData.title}
          </h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground">
            {caseData.description}
          </p>

          <div className="flex flex-wrap gap-2 border-t border-border pt-4">
            {caseData.requirements.slice(0, 3).map((req) => (
              <Badge key={req} variant="outline" className="text-xs">
                {req}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{daysLeft} дней</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{caseData.submissions}</span>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Zap className="h-4 w-4" />
              <span>{caseData.points} XP</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
