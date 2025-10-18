import { Layout, Typography, Card, Space, Divider, List } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { TypedLink } from '../components/TypedLink';

const { Title, Paragraph, Text } = Typography;

export function LinkStringPage() {
  const stringExamples = [
    { path: '/links', description: 'Относительный путь к родительской странице' },
    { path: '/links/navigate', description: 'Абсолютный путь к странице Navigate' },
    { path: '/', description: 'Корневой путь главной страницы' },
    { path: '../', description: 'Относительный путь на уровень выше' },
  ];

  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>📝 String Links</Title>

      <Paragraph>
        Строковые ссылки - это самый простой способ навигации в React Router. Они представляют собой обычные строки с
        путями, которые передаются в компонент <Text code>Link</Text>.
      </Paragraph>

      <Divider />

      <Title level={2}>Примеры строковых ссылок</Title>

      <Card title='Типы строковых путей' style={{ marginBottom: '16px' }}>
        <List
          dataSource={stringExamples}
          renderItem={item => (
            <List.Item>
              <div>
                <Text code>{item.path}</Text> - {item.description}
                <br />
                <Link to={item.path}>Перейти →</Link>
              </div>
            </List.Item>
          )}
        />
      </Card>

      <Card title='Особенности строковых ссылок'>
        <Paragraph>
          • Простота использования - не требуют дополнительных настроек
          <br />
          • Гибкость - поддерживают относительные и абсолютные пути
          <br />
          • Читаемость - легко понять куда ведет ссылка
          <br />• Ограичения - нет типизации, возможны ошибки в путях
        </Paragraph>
      </Card>

      <Divider />

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <TypedLink to={ROUTES.links} params={{ linkId: 'links' }}>
          ← Вернуться к списку типов ссылок
        </TypedLink>
        <TypedLink to={ROUTES.linkNavigate} params={{ linkId: 'links' }}>
          🧭 Navigate Links →
        </TypedLink>
        <TypedLink to={ROUTES.linkFunction} params={{ linkId: 'links' }}>
          ⚙️ Function Links →
        </TypedLink>
        <TypedLink to={ROUTES.linkInterpolate} params={{ linkId: 'links' }}>
          🔀 Interpolate Links →
        </TypedLink>
        <TypedLink to={ROUTES.home}>🏠 На главную →</TypedLink>
      </Space>
    </Layout>
  );
}
