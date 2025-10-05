# Архитектура типизированного роутинга

## Обзор

Данное приложение демонстрирует различные типы роутинга в React Router с полной типизацией TypeScript. Приложение посвящено докладу о правильной типизации роутинга и включает все основные паттерны, встречающиеся в реальных проектах.

## Структура роутов

### 1. Основные типы роутов

```typescript
export const RouteIds = {
    // Основные страницы
    home: 'home',
    
    // Простые роуты
    basicRouting: 'basicRouting',
    
    // Параметризованные роуты (:param)
    userProfile: 'userProfile',           // /users/:userId
    userSettings: 'userSettings',         // /users/:userId/settings
    productDetails: 'productDetails',     // /products/:productId
    categoryProducts: 'categoryProducts', // /categories/:categoryId/products
    
    // Индексные роуты с Outlet
    dashboard: 'dashboard',               // /dashboard (родительский)
    dashboardIndex: 'dashboardIndex',     // /dashboard (индексный)
    dashboardAnalytics: 'dashboardAnalytics', // /dashboard/analytics
    dashboardReports: 'dashboardReports', // /dashboard/reports
    
    // Вложенные роуты с Outlet
    admin: 'admin',                       // /admin (родительский)
    adminUsers: 'adminUsers',             // /admin/users
    adminSettings: 'adminSettings',       // /admin/settings
    
    // Search параметры для табов
    documentation: 'documentation',       // /docs?tab=overview
    
    // Множественные параметры
    fileViewer: 'fileViewer',            // /files/:folderId/:fileId
    
    // Optional параметры
    blogPost: 'blogPost',                // /blog/:slug/:commentId?
    
    // Wildcard роуты
    notFound: 'notFound',                // *
} as const;
```

### 2. Типизированная система навигации

#### Интерфейсы для параметров

```typescript
interface RouteParams {
    [RouteIds.userProfile]: { userId: string };
    [RouteIds.userSettings]: { userId: string };
    [RouteIds.productDetails]: { productId: string };
    [RouteIds.categoryProducts]: { categoryId: string };
    [RouteIds.fileViewer]: { folderId: string; fileId: string };
    [RouteIds.blogPost]: { slug: string; commentId?: string };
}

interface SearchParams {
    [RouteIds.documentation]: { tab?: 'overview' | 'api' | 'examples' | 'types' };
}
```

#### Типизированные хелперы

```typescript
// Генерация URL с автоподстановкой параметров
function generateUrl<T extends keyof RouteParams>(
    routeId: T,
    params: RouteParams[T]
): string;

// Типизированная навигация
function useTypedNavigate() {
    const navigate = useNavigate();
    
    return {
        to: <T extends keyof RouteParams>(
            routeId: T,
            params: RouteParams[T],
            searchParams?: SearchParams[T]
        ) => navigate(generateUrl(routeId, params) + searchParamsToString(searchParams))
    };
}
```

### 3. Структура страниц

#### Главная страница (`/`)
- Обзор всех типов роутинга
- Интерактивные примеры
- Ссылки на демо-страницы

#### Базовый роутинг (`/basic-routing`)
- Простые статические роуты
- Примеры Link компонентов
- Программная навигация

#### Параметризованные роуты
- `/users/:userId` - профиль пользователя
- `/users/:userId/settings` - настройки пользователя
- `/products/:productId` - детали продукта
- `/categories/:categoryId/products` - продукты категории

#### Индексные роуты с Outlet
```
/dashboard
├── index (DashboardIndex)
├── analytics (DashboardAnalytics)
└── reports (DashboardReports)

/admin
├── users (AdminUsers)
└── settings (AdminSettings)
```

#### Search параметры
- `/docs?tab=overview` - документация с табами
- Демонстрация useSearchParams
- Синхронизация состояния с URL

#### Сложные случаи
- `/files/:folderId/:fileId` - множественные параметры
- `/blog/:slug/:commentId?` - опциональные параметры

### 4. Компоненты навигации

#### TypedLink
```typescript
interface TypedLinkProps<T extends keyof RouteParams> {
    to: T;
    params: RouteParams[T];
    searchParams?: SearchParams[T];
    children: React.ReactNode;
}
```

#### BreadcrumbNavigation
- Автоматическая генерация хлебных крошек
- Типизированные ссылки
- Поддержка вложенных роутов

#### NavigationMenu
- Боковое меню с демонстрацией всех типов роутов
- Активные состояния
- Группировка по типам

### 5. Утилиты и хелперы

#### URL Generation
```typescript
// Генерация всех возможных URL приложения
function generateAllUrls(): Record<string, string[]>;

// Валидация параметров роута
function validateRouteParams<T extends keyof RouteParams>(
    routeId: T,
    params: unknown
): params is RouteParams[T];
```

#### Route Guards
```typescript
// Защищенные роуты
function ProtectedRoute({ children }: { children: React.ReactNode });

// Роуты с проверкой прав
function AdminRoute({ children }: { children: React.ReactNode });
```

### 6. Демонстрационные страницы

#### Каждая страница включает:
1. **Описание типа роута** - объяснение паттерна
2. **Примеры кода** - TypeScript код с типизацией
3. **Интерактивные элементы** - кнопки для навигации
4. **Исходный код** - показ реализации
5. **Best practices** - рекомендации по использованию

#### Контент страниц:
- **Теория роутинга** - основы React Router
- **Типизация параметров** - как правильно типизировать
- **Автоподстановка** - IDE поддержка и автокомплит
- **Генерация URL** - программное создание ссылок
- **Валидация** - проверка параметров
- **Производительность** - оптимизация роутинга

### 7. Технические детали

#### Структура файлов
```
src/
├── constants/
│   ├── routeIds.ts          # Константы роутов
│   └── routeConfig.ts       # Конфигурация роутинга
├── types/
│   ├── routing.ts           # Типы для роутинга
│   └── navigation.ts        # Типы навигации
├── utils/
│   ├── urlGeneration.ts     # Генерация URL
│   ├── routeValidation.ts   # Валидация роутов
│   └── navigationHelpers.ts # Хелперы навигации
├── components/
│   ├── Layout/              # Основной лейаут
│   ├── Navigation/          # Компоненты навигации
│   └── RouteGuards/         # Защищенные роуты
└── pages/                   # Страницы приложения
```

#### Используемые технологии
- **React Router v6** - роутинг
- **TypeScript** - типизация
- **Ant Design** - UI компоненты
- **React** - основной фреймворк

### 8. Цели демонстрации

1. **Полная типизация** - все параметры роутов типизированы
2. **Автоподстановка** - IDE поддержка при навигации
3. **Безопасность** - предотвращение ошибок в runtime
4. **Масштабируемость** - легкое добавление новых роутов
5. **Производительность** - оптимальная загрузка компонентов
6. **DX (Developer Experience)** - удобство разработки

## Заключение

Данная архитектура демонстрирует современные подходы к типизированному роутингу в React приложениях, показывая все основные паттерны и best practices для создания масштабируемых и безопасных навигационных систем.