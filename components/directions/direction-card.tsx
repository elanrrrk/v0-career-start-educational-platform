import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, TrendingUp } from "lucide-react"
import type { Direction } from "@/lib/data/directions"

interface DirectionCardProps {
  direction: Direction
}

export function DirectionCard({ direction }: DirectionCardProps) {
  const Icon = direction.icon

  const formatSalary = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      notation: "compact",
      compactDisplay: "short",
    }).format(value)
  }

  return (
    <Link href={`/directions/${direction.id}`}>
      <Card className="group h-full cursor-pointer border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-wrap justify-end gap-1">
              {direction.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {direction.title}
          </h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground">
            {direction.description}
          </p>

          <div className="space-y-3 border-t border-border pt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Зарплата</span>
              </div>
              <span className="font-medium text-primary">
                {formatSalary(direction.salary.min)} - {formatSalary(direction.salary.max)} ₽
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Студентов</span>
              </div>
              <span className="font-medium">{direction.students.toLocaleString("ru-RU")}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                <span>Кейсов</span>
              </div>
              <span className="font-medium">{direction.cases}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
