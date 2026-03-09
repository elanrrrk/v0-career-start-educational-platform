"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StreakFlame } from "@/components/ui/streak-flame"
import { Menu, X, Zap, User } from "lucide-react"

const navLinks = [
  { href: "/directions", label: "Направления" },
  { href: "/cases", label: "Кейсы" },
  { href: "/companies", label: "Компании" },
  { href: "/blog", label: "Блог" },
]

// Mock auth state - in real app this would come from auth context
const isLoggedIn = false
const userStreak = 7

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Career<span className="text-primary">Start</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/streak"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-colors hover:bg-orange-500/20"
          >
            <Zap className="h-5 w-5 fill-current" />
          </Link>
          <Link
            href="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
          >
            <User className="h-5 w-5" />
          </Link>
          {!isLoggedIn && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Войти</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                <Link href="/register">Начать</Link>
              </Button>
            </>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              {!isLoggedIn && (
                <>
                  <Button variant="outline" asChild>
                    <Link href="/login">Войти</Link>
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-accent" asChild>
                    <Link href="/register">Начать</Link>
                  </Button>
                </>
              )}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="ghost" className="gap-2 text-orange-500 hover:bg-orange-500/10" asChild>
                  <Link href="/streak">
                    <Zap className="h-4 w-4 fill-current" />
                    Streak
                  </Link>
                </Button>
                <Button variant="ghost" className="gap-2" asChild>
                  <Link href="/profile">
                    <User className="h-4 w-4" />
                    Профиль
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
