export interface Case {
  id: string
  title: string
  company: string
  companyLogo?: string
  direction: string
  difficulty: "easy" | "medium" | "hard"
  description: string
  fullDescription: string
  deadline: Date
  duration: string
  submissions: number
  points: number
  theory: { title: string; description: string; link: string }[]
  requirements: string[]
}

export const cases: Case[] = [
  {
    id: "frontend-1",
    title: "Редизайн страницы товара",
    company: "Ozon",
    direction: "frontend",
    difficulty: "easy",
    description: "Создайте современную карточку товара с галереей и описанием",
    fullDescription: `## Задание

Вам необходимо создать современную страницу товара для маркетплейса. Страница должна включать:

### Основные требования:
- Галерея изображений с возможностью переключения
- Информация о товаре (название, цена, описание)
- Кнопка "Добавить в корзину"
- Блок с характеристиками
- Отзывы покупателей

### Технические требования:
- React + TypeScript
- Адаптивная верстка (мобильные устройства, планшеты, десктоп)
- Анимации переключения изображений
- Оптимизация производительности`,
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    duration: "4-6 часов",
    submissions: 234,
    points: 100,
    theory: [
      { title: "React компоненты", description: "Основы работы с компонентами", link: "#" },
      { title: "CSS Grid и Flexbox", description: "Современные подходы к верстке", link: "#" },
    ],
    requirements: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "frontend-2",
    title: "Дашборд аналитики",
    company: "Яндекс",
    direction: "frontend",
    difficulty: "medium",
    description: "Разработайте интерактивный дашборд с графиками и фильтрами",
    fullDescription: `## Задание

Создайте интерактивный дашборд для отображения аналитических данных.

### Основные требования:
- Несколько типов графиков (линейный, столбчатый, круговой)
- Фильтрация данных по периоду
- Экспорт отчетов
- Realtime обновление данных

### Технические требования:
- Next.js 14+
- Recharts или D3.js
- Работа с API`,
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    duration: "8-12 часов",
    submissions: 156,
    points: 200,
    theory: [
      { title: "Визуализация данных", description: "Принципы построения графиков", link: "#" },
      { title: "Next.js Server Components", description: "Работа с данными", link: "#" },
    ],
    requirements: ["Next.js", "Recharts", "API Integration"],
  },
  {
    id: "design-1",
    title: "Мобильное приложение банка",
    company: "Тинькофф",
    direction: "design",
    difficulty: "hard",
    description: "Спроектируйте UX/UI для нового мобильного банкинга",
    fullDescription: `## Задание

Создайте дизайн мобильного приложения для банка нового поколения.

### Основные требования:
- Главный экран с балансом и быстрыми действиями
- Переводы между счетами и пользователями
- История операций с фильтрацией
- Настройки профиля

### Дизайн требования:
- Figma прототип
- Дизайн-система
- Dark и Light темы`,
    deadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    duration: "15-20 часов",
    submissions: 89,
    points: 300,
    theory: [
      { title: "Дизайн-системы", description: "Создание масштабируемых систем", link: "#" },
      { title: "UX банковских приложений", description: "Лучшие практики", link: "#" },
    ],
    requirements: ["Figma", "Design System", "Prototyping"],
  },
  {
    id: "analytics-1",
    title: "Анализ воронки продаж",
    company: "Сбер",
    direction: "analytics",
    difficulty: "medium",
    description: "Проанализируйте данные и найдите точки роста конверсии",
    fullDescription: `## Задание

Проведите анализ воронки продаж и подготовьте рекомендации.

### Задачи:
- Анализ конверсии на каждом этапе
- Выявление проблемных зон
- A/B тестирование гипотез
- Подготовка презентации с выводами`,
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    duration: "6-10 часов",
    submissions: 178,
    points: 200,
    theory: [
      { title: "Воронка продаж", description: "Метрики и анализ", link: "#" },
      { title: "SQL для аналитиков", description: "Сложные запросы", link: "#" },
    ],
    requirements: ["SQL", "Python", "Visualization"],
  },
  {
    id: "backend-1",
    title: "REST API для маркетплейса",
    company: "Авито",
    direction: "backend",
    difficulty: "hard",
    description: "Разработайте масштабируемое API для объявлений",
    fullDescription: `## Задание

Создайте backend для платформы объявлений.

### Функционал:
- CRUD для объявлений
- Авторизация и роли
- Поиск и фильтрация
- Загрузка изображений

### Требования:
- Node.js или Python
- PostgreSQL
- Redis для кэширования
- Docker`,
    deadline: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    duration: "20-30 часов",
    submissions: 67,
    points: 350,
    theory: [
      { title: "REST API Design", description: "Принципы проектирования", link: "#" },
      { title: "PostgreSQL", description: "Оптимизация запросов", link: "#" },
    ],
    requirements: ["Node.js", "PostgreSQL", "Docker"],
  },
]

export function getCaseById(id: string): Case | undefined {
  return cases.find((c) => c.id === id)
}

export function getCasesByDirection(direction: string): Case[] {
  return cases.filter((c) => c.direction === direction)
}
