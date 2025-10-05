import { generatePath, Link } from 'react-router-dom';
import { Button } from 'antd';
import { useTypedNavigation } from '../hooks/useTypedNavigation';

// Компонент хлебных крошек
interface BreadcrumbItem {
  title: string;
  href: string;
  params?: Record<string, string>;
}

interface TypedBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: TypedBreadcrumbProps) {
  return (
    <nav style={{ marginBottom: 16 }}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link to={generatePath(item.href, { params: item.params })}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
          {index < items.length - 1 && <span style={{ margin: '0 8px' }}>/</span>}
        </span>
      ))}
    </nav>
  );
}

// Компонент для демонстрации всех URL
export function AllUrlsDemo() {
  const navigation = useTypedNavigation();

  const examples = [
    { label: 'Главная', action: () => navigation.home() },
    { label: 'Базовый роутинг', action: () => navigation.basicRouting() },
    { label: 'Профиль пользователя (john-doe)', action: () => navigation.userProfile('john-doe') },
    { label: 'Настройки пользователя (john-doe)', action: () => navigation.userSettings('john-doe') },
    { label: 'Детали продукта (laptop-123)', action: () => navigation.productDetails('laptop-123') },
    { label: 'Продукты категории (electronics)', action: () => navigation.categoryProducts('electronics') },
    { label: 'Просмотр файла', action: () => navigation.fileViewer('documents', 'report.pdf') },
    { label: 'Пост блога', action: () => navigation.blogPost('react-routing-guide') },
    { label: 'Пост блога с комментарием', action: () => navigation.blogPost('react-routing-guide', '42') },
    { label: 'Документация (Overview)', action: () => navigation.documentation('overview') },
    { label: 'Документация (API)', action: () => navigation.documentation('api') },
    { label: 'Табы (Technologies)', action: () => navigation.tabPage('technologies') },
    { label: 'Дашборд', action: () => navigation.dashboard() },
    { label: 'Аналитика', action: () => navigation.dashboardAnalytics() },
    { label: 'Отчеты', action: () => navigation.dashboardReports() },
    { label: 'Админ панель', action: () => navigation.admin() },
    { label: 'Пользователи админ', action: () => navigation.adminUsers() },
    { label: 'Настройки админ', action: () => navigation.adminSettings() },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {examples.map((example, index) => (
        <Button key={index} size='small' onClick={example.action}>
          {example.label}
        </Button>
      ))}
    </div>
  );
}
