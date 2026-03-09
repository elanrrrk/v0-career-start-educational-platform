"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/ui/typewriter"
import { ArrowRight, Users, Briefcase, Award } from "lucide-react"

const companies = ["Яндекс", "Сбер", "VK", "Тинькофф", "Ozon", "Авито"]

const stats = [
  { icon: Users, value: "15,000+", label: "Студентов" },
  { icon: Briefcase, value: "500+", label: "Кейсов" },
  { icon: Award, value: "120+", label: "Компаний" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_260/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.60_0.20_300/0.1),transparent_50%)]" />
      
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Новый сезон кейсов открыт
        </div>

        <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          От первой задачи до оффера в{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            <Typewriter words={companies} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Решай реальные кейсы от топовых компаний, попадай в рейтинг лучших и получай приглашения на собеседования
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent text-lg hover:opacity-90" asChild>
            <Link href="/directions">
              Начать путь
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg" asChild>
            <Link href="/companies">Для компаний</Link>
          </Button>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold sm:text-3xl">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
