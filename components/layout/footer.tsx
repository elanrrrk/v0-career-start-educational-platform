import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  platform: [
    { href: "/directions", label: "Направления" },
    { href: "/cases", label: "Кейсы" },
    { href: "/companies", label: "Компании" },
    { href: "/blog", label: "Блог" },
  ],
  company: [
    { href: "/about", label: "О нас" },
    { href: "/careers", label: "Карьера" },
    { href: "/contact", label: "Контакты" },
    { href: "/press", label: "Пресса" },
  ],
  legal: [
    { href: "/privacy", label: "Конфиденциальность" },
    { href: "/terms", label: "Условия" },
    { href: "/cookies", label: "Cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Career<span className="text-primary">Start</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Образовательная платформа нового поколения. Связываем студентов с реальным опытом работы.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Платформа</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CareerStart. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
