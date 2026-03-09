import { Code2, Palette, LineChart, Database, Shield, Smartphone, Brain, Server } from "lucide-react"

export interface Direction {
  id: string
  title: string
  description: string
  icon: typeof Code2
  tags: string[]
  salary: { min: number; max: number }
  students: number
  cases: number
  skills: { name: string; type: "hard" | "soft"; level: number }[]
  roadmap: { title: string; description: string; completed?: boolean }[]
}

export const directions: Direction[] = [
  {
    id: "frontend",
    title: "Frontend-разработка",
    description: "Создание пользовательских интерфейсов с React, Next.js и современным CSS",
    icon: Code2,
    tags: ["Популярное", "Много вакансий"],
    salary: { min: 80000, max: 350000 },
    students: 4520,
    cases: 48,
    skills: [
      { name: "JavaScript/TypeScript", type: "hard", level: 90 },
      { name: "React/Next.js", type: "hard", level: 85 },
      { name: "CSS/Tailwind", type: "hard", level: 80 },
      { name: "Коммуникация", type: "soft", level: 75 },
      { name: "Работа в команде", type: "soft", level: 70 },
      { name: "Внимание к деталям", type: "soft", level: 85 },
    ],
    roadmap: [
      { title: "HTML & CSS основы", description: "Семантика, Flexbox, Grid", completed: true },
      { title: "JavaScript", description: "ES6+, DOM, асинхронность", completed: true },
      { title: "React", description: "Компоненты, хуки, состояние", completed: false },
      { title: "Next.js", description: "SSR, API routes, оптимизация" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
  {
    id: "design",
    title: "UI/UX Дизайн",
    description: "Проектирование пользовательского опыта и интерфейсов",
    icon: Palette,
    tags: ["Для новичков", "Креатив"],
    salary: { min: 70000, max: 280000 },
    students: 2840,
    cases: 35,
    skills: [
      { name: "Figma", type: "hard", level: 90 },
      { name: "Дизайн-системы", type: "hard", level: 75 },
      { name: "Прототипирование", type: "hard", level: 80 },
      { name: "Эмпатия", type: "soft", level: 85 },
      { name: "Презентация", type: "soft", level: 80 },
      { name: "Критическое мышление", type: "soft", level: 75 },
    ],
    roadmap: [
      { title: "Основы дизайна", description: "Типографика, цвет, композиция", completed: true },
      { title: "Figma", description: "Инструменты и компоненты", completed: false },
      { title: "UX Research", description: "Исследования и тестирование" },
      { title: "Дизайн-системы", description: "Создание и документация" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
  {
    id: "analytics",
    title: "Аналитика данных",
    description: "Анализ данных, визуализация и принятие решений на основе данных",
    icon: LineChart,
    tags: ["Много вакансий", "Высокие зарплаты"],
    salary: { min: 90000, max: 400000 },
    students: 3120,
    cases: 42,
    skills: [
      { name: "SQL", type: "hard", level: 85 },
      { name: "Python/Pandas", type: "hard", level: 80 },
      { name: "Визуализация", type: "hard", level: 75 },
      { name: "Системное мышление", type: "soft", level: 85 },
      { name: "Коммуникация", type: "soft", level: 80 },
      { name: "Внимание к деталям", type: "soft", level: 90 },
    ],
    roadmap: [
      { title: "SQL", description: "Запросы, джойны, агрегации", completed: true },
      { title: "Python", description: "Pandas, NumPy, основы", completed: false },
      { title: "Визуализация", description: "Tableau, Power BI" },
      { title: "Статистика", description: "A/B тесты, метрики" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
  {
    id: "backend",
    title: "Backend-разработка",
    description: "Серверная разработка, API и базы данных",
    icon: Server,
    tags: ["Популярное", "Высокие зарплаты"],
    salary: { min: 100000, max: 450000 },
    students: 3890,
    cases: 52,
    skills: [
      { name: "Node.js/Python", type: "hard", level: 85 },
      { name: "Базы данных", type: "hard", level: 80 },
      { name: "API Design", type: "hard", level: 75 },
      { name: "Архитектурное мышление", type: "soft", level: 85 },
      { name: "Документирование", type: "soft", level: 70 },
      { name: "Отладка", type: "soft", level: 80 },
    ],
    roadmap: [
      { title: "Язык программирования", description: "Python или Node.js", completed: true },
      { title: "Базы данных", description: "PostgreSQL, Redis", completed: false },
      { title: "API", description: "REST, GraphQL" },
      { title: "DevOps основы", description: "Docker, CI/CD" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
  {
    id: "mobile",
    title: "Мобильная разработка",
    description: "Создание приложений для iOS и Android",
    icon: Smartphone,
    tags: ["Для новичков"],
    salary: { min: 90000, max: 380000 },
    students: 1950,
    cases: 28,
    skills: [
      { name: "React Native/Flutter", type: "hard", level: 80 },
      { name: "Swift/Kotlin", type: "hard", level: 75 },
      { name: "Мобильный UX", type: "hard", level: 70 },
      { name: "Кроссплатформенность", type: "soft", level: 80 },
      { name: "Оптимизация", type: "soft", level: 75 },
      { name: "Тестирование", type: "soft", level: 70 },
    ],
    roadmap: [
      { title: "Основы", description: "JavaScript или Dart", completed: true },
      { title: "Фреймворк", description: "React Native или Flutter", completed: false },
      { title: "Нативные API", description: "Камера, геолокация" },
      { title: "Публикация", description: "App Store, Google Play" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Машинное обучение и искусственный интеллект",
    icon: Brain,
    tags: ["Высокие зарплаты", "Сложное"],
    salary: { min: 150000, max: 600000 },
    students: 1280,
    cases: 22,
    skills: [
      { name: "Python", type: "hard", level: 90 },
      { name: "TensorFlow/PyTorch", type: "hard", level: 80 },
      { name: "Математика", type: "hard", level: 85 },
      { name: "Исследование", type: "soft", level: 85 },
      { name: "Критическое мышление", type: "soft", level: 90 },
      { name: "Документирование", type: "soft", level: 75 },
    ],
    roadmap: [
      { title: "Python & Математика", description: "NumPy, линейная алгебра", completed: true },
      { title: "ML основы", description: "Scikit-learn, базовые алгоритмы", completed: false },
      { title: "Deep Learning", description: "Нейросети, TensorFlow" },
      { title: "MLOps", description: "Деплой моделей" },
      { title: "Кейсы", description: "Реальные проекты от компаний" },
    ],
  },
]

export function getDirectionById(id: string): Direction | undefined {
  return directions.find((d) => d.id === id)
}
