export interface Company {
  id: string
  name: string
  logo: string
  industry: string
  description: string
  employees: string
  location: string
  activeCases: number
  totalHires: number
  rating: number
  tags: string[]
  benefits: string[]
}

export const companies: Company[] = [
  {
    id: "yandex",
    name: "Яндекс",
    logo: "Y",
    industry: "Технологии",
    description: "Технологическая компания, создающая интеллектуальные продукты и сервисы на основе машинного обучения.",
    employees: "10,000+",
    location: "Москва",
    activeCases: 24,
    totalHires: 156,
    rating: 4.8,
    tags: ["ML", "Backend", "Frontend", "Data Science"],
    benefits: ["Гибкий график", "ДМС", "Обучение", "Релокация"]
  },
  {
    id: "sber",
    name: "Сбер",
    logo: "S",
    industry: "Финтех",
    description: "Крупнейший банк России и технологическая компания, развивающая экосистему цифровых сервисов.",
    employees: "250,000+",
    location: "Москва",
    activeCases: 31,
    totalHires: 243,
    rating: 4.6,
    tags: ["Fintech", "Java", "Analytics", "Product"],
    benefits: ["Корпоративные бонусы", "ДМС", "Карьерный рост"]
  },
  {
    id: "vk",
    name: "VK",
    logo: "VK",
    industry: "Социальные сети",
    description: "Крупнейшая в России социальная сеть и технологическая экосистема с сервисами для миллионов пользователей.",
    employees: "15,000+",
    location: "Санкт-Петербург",
    activeCases: 18,
    totalHires: 89,
    rating: 4.7,
    tags: ["Frontend", "Mobile", "ML", "Gaming"],
    benefits: ["Гибкий офис", "Фитнес", "Обучение"]
  },
  {
    id: "tinkoff",
    name: "Тинькофф",
    logo: "T",
    industry: "Финтех",
    description: "Онлайн-экосистема, включающая банк, страхование, инвестиции и множество lifestyle-сервисов.",
    employees: "30,000+",
    location: "Москва",
    activeCases: 27,
    totalHires: 178,
    rating: 4.9,
    tags: ["Scala", "React", "Data", "Product"],
    benefits: ["Удаленка", "Акции", "ДМС Premium"]
  },
  {
    id: "ozon",
    name: "Ozon",
    logo: "O",
    industry: "E-commerce",
    description: "Одна из крупнейших e-commerce платформ в России с собственной логистической инфраструктурой.",
    employees: "45,000+",
    location: "Москва",
    activeCases: 15,
    totalHires: 67,
    rating: 4.5,
    tags: ["Python", "Go", "Logistics", "Product"],
    benefits: ["Скидки", "ДМС", "Обучение"]
  },
  {
    id: "avito",
    name: "Авито",
    logo: "A",
    industry: "Маркетплейс",
    description: "Крупнейшая платформа объявлений в России, где люди находят всё — от вещей до работы и недвижимости.",
    employees: "5,000+",
    location: "Москва",
    activeCases: 12,
    totalHires: 45,
    rating: 4.7,
    tags: ["PHP", "Go", "ML", "Product"],
    benefits: ["Гибкий график", "ДМС", "Спорт"]
  },
  {
    id: "kaspersky",
    name: "Лаборатория Касперского",
    logo: "K",
    industry: "Кибербезопасность",
    description: "Международная компания, специализирующаяся на разработке систем защиты от компьютерных вирусов и киберугроз.",
    employees: "4,000+",
    location: "Москва",
    activeCases: 8,
    totalHires: 34,
    rating: 4.6,
    tags: ["Security", "C++", "Reverse Engineering"],
    benefits: ["Обучение", "ДМС", "Спорт"]
  },
  {
    id: "mts",
    name: "МТС",
    logo: "M",
    industry: "Телеком",
    description: "Цифровая экосистема, предоставляющая услуги связи, финтех, медиа и облачные решения.",
    employees: "60,000+",
    location: "Москва",
    activeCases: 14,
    totalHires: 52,
    rating: 4.4,
    tags: ["Telecom", "Big Data", "Cloud", "5G"],
    benefits: ["Связь", "ДМС", "Карьера"]
  }
]

export function getCompanyById(id: string): Company | undefined {
  return companies.find(c => c.id === id)
}
