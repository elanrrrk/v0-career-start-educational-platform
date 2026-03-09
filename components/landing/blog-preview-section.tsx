import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageCircle, Play } from "lucide-react"

const posts = [
  {
    type: "telegram",
    title: "5 ошибок на собеседовании в IT",
    excerpt: "Разбираем типичные провалы и как их избежать...",
    views: "12.5K",
    date: "2 дня назад",
  },
  {
    type: "tiktok",
    title: "Как я попал в Яндекс без опыта",
    excerpt: "История успеха нашего студента...",
    views: "45K",
    date: "5 дней назад",
  },
  {
    type: "telegram",
    title: "Роадмап Frontend 2026",
    excerpt: "Актуальный путь в веб-разработку...",
    views: "8.2K",
    date: "неделю назад",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Блог и контент</h2>
            <p className="text-muted-foreground">Полезные материалы для твоего роста</p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-medium text-primary"
          >
            Все материалы
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="group cursor-pointer border-border bg-card transition-all hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1.5">
                    {post.type === "telegram" ? (
                      <MessageCircle className="h-3 w-3" />
                    ) : (
                      <Play className="h-3 w-3" />
                    )}
                    {post.type === "telegram" ? "Telegram" : "TikTok"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="text-xs text-muted-foreground">
                  {post.views} просмотров
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
