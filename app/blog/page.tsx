"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { blogPosts, blogCategories } from "@/lib/data/blog"
import { 
  Search, 
  Clock,
  Eye,
  Heart,
  BookOpen,
  TrendingUp,
  ArrowRight
} from "lucide-react"

export default function BlogPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "Все" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts[0]
  const trendingPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_260/0.1),transparent_50%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="mr-1 h-3 w-3" />
                Блог CareerStart
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Полезные <span className="text-primary">материалы</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Статьи, гайды и инсайты для успешного старта карьеры в IT и не только
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск статей..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              {selectedCategory === "Все" && !search && (
                <Link href={`/blog/${featuredPost.id}`}>
                  <Card className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="aspect-[2/1] bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                      <Badge className="bg-primary/90">{featuredPost.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h2 className="mb-3 text-2xl font-bold group-hover:text-primary">
                        {featuredPost.title}
                      </h2>
                      <p className="mb-4 text-muted-foreground">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                            {featuredPost.author.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{featuredPost.author.name}</p>
                            <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} мин
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {(featuredPost.views / 1000).toFixed(1)}K
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}

              {/* Posts Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {filteredPosts.slice(selectedCategory === "Все" && !search ? 1 : 0).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <Card className="group h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                      <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 p-4">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="mb-2 font-semibold leading-snug group-hover:text-primary">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                              {post.author.avatar}
                            </div>
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime} мин
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="mb-2 text-lg font-medium">Статьи не найдены</h3>
                  <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-semibold">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Популярное
                  </h3>
                  <div className="space-y-4">
                    {trendingPosts.map((post, index) => (
                      <Link key={post.id} href={`/blog/${post.id}`}>
                        <div className="group flex gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-medium leading-snug group-hover:text-primary">
                              {post.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {(post.views / 1000).toFixed(1)}K просмотров
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">Популярные теги</h3>
                  <div className="flex flex-wrap gap-2">
                    {["карьера", "кейсы", "собеседование", "портфолио", "навыки", "удаленка", "data science"].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-semibold">Подпишись на рассылку</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Получай лучшие статьи и карьерные советы раз в неделю
                  </p>
                  <div className="flex gap-2">
                    <Input placeholder="Email" className="flex-1" />
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
