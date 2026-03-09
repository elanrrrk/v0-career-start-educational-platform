import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPostById, blogPosts } from "@/lib/data/blog"
import { 
  ArrowLeft,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MessageSquare,
  Calendar
} from "lucide-react"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Article Header */}
        <section className="relative overflow-hidden border-b border-border py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_260/0.1),transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Все статьи
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mb-8 text-xl text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-medium text-primary">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("ru-RU", { 
                    day: "numeric", 
                    month: "long", 
                    year: "numeric" 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} мин
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {(post.views / 1000).toFixed(1)}K
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <div className="rounded-xl bg-muted/30 p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  Начать свой путь в решении бизнес-кейсов может быть непросто, особенно если у вас нет опыта. 
                  Но именно для этого мы создали CareerStart — чтобы помочь студентам получить реальный опыт 
                  и продемонстрировать свои навыки работодателям.
                </p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">Шаг 1: Выберите направление</h2>
                <p className="text-muted-foreground">
                  Первое, что нужно сделать — определиться с направлением. Выберите то, что вам интересно: 
                  аналитика данных, продуктовый менеджмент, маркетинг или разработка. Не бойтесь начать с чего-то нового.
                </p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">Шаг 2: Изучите теорию</h2>
                <p className="text-muted-foreground">
                  Перед тем как браться за кейс, освежите знания. На каждой странице кейса есть блок 
                  «Освежить знания» с полезными материалами по теме.
                </p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">Шаг 3: Решите кейс</h2>
                <p className="text-muted-foreground">
                  Приступайте к решению! Не бойтесь ошибаться — это часть процесса обучения. 
                  Важно показать свой ход мыслей и обосновать решения.
                </p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">Шаг 4: Получите обратную связь</h2>
                <p className="text-muted-foreground">
                  После отправки решения компания проверит вашу работу и даст обратную связь. 
                  Лучшие решения попадают в рейтинг, а их авторы получают приглашения на собеседования.
                </p>

                <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Совет от экспертов</h3>
                  <p className="text-muted-foreground">
                    Не пытайтесь сделать идеально с первого раза. Лучше отправить хорошее решение вовремя, 
                    чем идеальное — после дедлайна.
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="gap-2">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Комментарии
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-medium text-primary">
                    {post.author.avatar}
                  </div>
                  <h3 className="font-semibold">{post.author.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.author.role}</p>
                  <Button variant="outline" className="w-full">Все статьи автора</Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold">Похожие статьи</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                          <div className="group">
                            <h4 className="text-sm font-medium leading-snug group-hover:text-primary">
                              {relatedPost.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {relatedPost.readTime} мин чтения
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
