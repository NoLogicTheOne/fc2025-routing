import { Layout, Typography, Card, Space, Divider, Button, Input, Form } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { Title, Paragraph, Text } = Typography;

export function LinkFunctionPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('123');

  const generateUserLink = (id: string) => `/user/${id}`;
  const generateProductLink = (id: string) => `/product/${id}`;
  const generateCategoryLink = (category: string, subcategory?: string) =>
    subcategory ? `/category/${category}/${subcategory}` : `/category/${category}`;

  const handleNavigateWithParams = () => {
    const userPath = generateUserLink(userId);
    navigate(userPath);
  };

  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>⚙️ Function Links</Title>

      <Paragraph>
        Функциональные ссылки позволяют создавать динамические пути с параметрами. Это особенно полезно когда нужно
        передать переменные данные в URL или создать переиспользуемые функции для генерации ссылок.
      </Paragraph>

      <Divider />

      <Title level={2}>Примеры функциональных ссылок</Title>

      <Card title='Функции для генерации путей' style={{ marginBottom: '16px' }}>
        <Space direction='vertical' style={{ width: '100%' }}>
          <div>
            <Text code>generateUserLink(id)</Text>
            <br />
            <Link to={generateUserLink('123')}>Пользователь #123 →</Link>
            {' | '}
            <Link to={generateUserLink('456')}>Пользователь #456 →</Link>
          </div>

          <div>
            <Text code>generateProductLink(id)</Text>
            <br />
            <Link to={generateProductLink('product-1')}>Продукт #product-1 →</Link>
            {' | '}
            <Link to={generateProductLink('product-2')}>Продукт #product-2 →</Link>
          </div>

          <div>
            <Text code>generateCategoryLink(category, subcategory?)</Text>
            <br />
            <Link to={generateCategoryLink('electronics')}>Электроника →</Link>
            {' | '}
            <Link to={generateCategoryLink('electronics', 'phones')}>Электроника / Телефоны →</Link>
          </div>
        </Space>
      </Card>

      <Card title='Интерактивный пример' style={{ marginBottom: '16px' }}>
        <Form layout='inline' style={{ marginBottom: '16px' }}>
          <Form.Item label='User ID'>
            <Input value={userId} onChange={e => setUserId(e.target.value)} placeholder='Введите ID пользователя' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={handleNavigateWithParams}>
              Перейти к пользователю
            </Button>
          </Form.Item>
        </Form>

        <Text type='secondary'>
          Сгенерированный путь: <Text code>{generateUserLink(userId)}</Text>
        </Text>
      </Card>

      <Card title='Преимущества функциональных ссылок'>
        <Paragraph>
          • Переиспользуемость - одна функция для разных параметров
          <br />
          • Типизация - можно добавить проверку типов для параметров
          <br />
          • Централизация - логика генерации ссылок в одном месте
          <br />• Гибкость - поддержка опциональных параметров и сложной логики
        </Paragraph>
      </Card>

      <Divider />

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <Link to='/links'>← Вернуться к списку типов ссылок</Link>
        <Link to='/links/navigate'>🧭 Navigate Links →</Link>
        <Link to='/links/string'>📝 String Links →</Link>
        <Link to='/links/interpolate'>🔀 Interpolate Links →</Link>
        <Link to='/'>🏠 На главную →</Link>
      </Space>
    </Layout>
  );
}
