import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 text-center sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.22_260/0.1),transparent_70%)]" />
          
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Готов начать свой путь?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Присоединяйся к тысячам студентов, которые уже строят карьеру мечты через реальные кейсы
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent text-lg hover:opacity-90" asChild>
                <Link href="/register">
                  Создать аккаунт
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/directions">Посмотреть направления</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
