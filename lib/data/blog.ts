export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: string
  tags: string[]
  readTime: number
  publishedAt: string
  image: string
  views: number
  likes: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-solve-first-case",
    title: "Как решить свой первый кейс и впечатлить работодателя",
    excerpt: "Пошаговое руководство для студентов, которые только начинают свой путь в решении бизнес-кейсов.",
    content: "Полный гайд по решению кейсов...",
    author: {
      name: "Анна Петрова",
      avatar: "А",
      role: "Карьерный консультант"
    },
    category: "Гайды",
    tags: ["кейсы", "начинающим", "карьера"],
    readTime: 8,
    publishedAt: "2024-03-15",
    image: "/blog/first-case.jpg",
    views: 12500,
    likes: 847
  },
  {
    id: "top-skills-2024",
    title: "Топ-10 навыков, которые ищут работодатели в 2024 году",
    excerpt: "Анализ рынка труда и ключевые компетенции, которые помогут получить работу мечты.",
    content: "Детальный анализ навыков...",
    author: {
      name: "Дмитрий Козлов",
      avatar: "Д",
      role: "HR-эксперт"
    },
    category: "Аналитика",
    tags: ["навыки", "карьера", "тренды"],
    readTime: 12,
    publishedAt: "2024-03-10",
    image: "/blog/skills-2024.jpg",
    views: 8900,
    likes: 623
  },
  {
    id: "interview-tips-yandex",
    title: "Как пройти собеседование в Яндекс: инсайды от рекрутера",
    excerpt: "Эксклюзивное интервью с HR-менеджером Яндекса о том, что действительно важно на собеседовании.",
    content: "Интервью с рекрутером...",
    author: {
      name: "Мария Сидорова",
      avatar: "М",
      role: "HR Яндекс"
    },
    category: "Интервью",
    tags: ["яндекс", "собеседование", "tips"],
    readTime: 15,
    publishedAt: "2024-03-05",
    image: "/blog/yandex-interview.jpg",
    views: 21000,
    likes: 1542
  },
  {
    id: "portfolio-guide",
    title: "Создаём портфолио, которое невозможно игнорировать",
    excerpt: "Практические советы по оформлению портфолио для разных специальностей.",
    content: "Гайд по портфолио...",
    author: {
      name: "Алексей Иванов",
      avatar: "А",
      role: "Product Designer"
    },
    category: "Гайды",
    tags: ["портфолио", "дизайн", "карьера"],
    readTime: 10,
    publishedAt: "2024-02-28",
    image: "/blog/portfolio.jpg",
    views: 15600,
    likes: 1089
  },
  {
    id: "remote-work-tips",
    title: "Удалёнка в IT: как оставаться продуктивным и не выгореть",
    excerpt: "Советы от команды CareerStart по организации рабочего дня на удалёнке.",
    content: "Советы по удаленке...",
    author: {
      name: "Елена Волкова",
      avatar: "Е",
      role: "Team Lead"
    },
    category: "Lifestyle",
    tags: ["удаленка", "продуктивность", "баланс"],
    readTime: 7,
    publishedAt: "2024-02-20",
    image: "/blog/remote-work.jpg",
    views: 9800,
    likes: 756
  },
  {
    id: "data-science-roadmap",
    title: "Дорожная карта Data Scientist в 2024: от нуля до оффера",
    excerpt: "Полный путь обучения для тех, кто хочет стать специалистом по данным.",
    content: "Roadmap Data Science...",
    author: {
      name: "Игорь Смирнов",
      avatar: "И",
      role: "Senior Data Scientist"
    },
    category: "Roadmap",
    tags: ["data science", "обучение", "карьера"],
    readTime: 20,
    publishedAt: "2024-02-15",
    image: "/blog/ds-roadmap.jpg",
    views: 18200,
    likes: 1367
  }
]

export const blogCategories = [
  "Все",
  "Гайды",
  "Аналитика",
  "Интервью",
  "Roadmap",
  "Lifestyle"
]

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(p => p.id === id)
}
