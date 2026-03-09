const companies = [
  "Яндекс",
  "Сбер",
  "VK",
  "Тинькофф",
  "Ozon",
  "Авито",
  "МТС",
  "Kaspersky",
]

export function SocialProofSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Нам доверяют ведущие компании
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((company) => (
            <div
              key={company}
              className="text-2xl font-bold text-muted-foreground/50 grayscale transition-all hover:text-foreground hover:grayscale-0"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
