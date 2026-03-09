"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Zap, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.65_0.22_260/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.60_0.20_300/0.1),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.3_0.02_280/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.3_0.02_280/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="mx-auto mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Career<span className="text-primary">Start</span>
          </span>
        </Link>

        <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Добро пожаловать</CardTitle>
            <CardDescription>
              Войдите в аккаунт, чтобы продолжить
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Пароль</Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                    Забыли пароль?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground"
                >
                  Запомнить меня
                </label>
              </div>

              <Button type="submit" className="w-full gap-2 bg-gradient-to-r from-primary to-accent">
                Войти
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                или продолжить с
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="gap-2">
                <Chrome className="h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Нет аккаунта?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Продолжая, вы соглашаетесь с{" "}
          <Link href="/terms" className="underline hover:text-foreground">
            условиями использования
          </Link>{" "}
          и{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  )
}
