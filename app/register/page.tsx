"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Zap, Mail, Lock, User, ArrowRight, Github, Chrome, GraduationCap } from "lucide-react"

const directions = [
  "Frontend-разработка",
  "Backend-разработка",
  "Data Science",
  "Product Management",
  "UX/UI Дизайн",
  "Аналитика данных",
  "Маркетинг",
  "DevOps"
]

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    direction: "",
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration
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
            <CardTitle className="text-2xl">Создать аккаунт</CardTitle>
            <CardDescription>
              Начни свой путь к карьере мечты
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="direction">Интересующее направление</Label>
                <Select
                  value={formData.direction}
                  onValueChange={(value) => setFormData({ ...formData, direction: value })}
                >
                  <SelectTrigger className="w-full">
                    <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Выберите направление" />
                  </SelectTrigger>
                  <SelectContent>
                    {directions.map((dir) => (
                      <SelectItem key={dir} value={dir}>
                        {dir}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Минимум 8 символов"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-snug text-muted-foreground"
                >
                  Я согласен с{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full gap-2 bg-gradient-to-r from-primary to-accent">
                Создать аккаунт
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
              Уже есть аккаунт?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Войти
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
