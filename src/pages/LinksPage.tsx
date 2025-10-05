import { Layout, Typography, Card, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

export function LinksPage() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>Типизированные ссылки</Title>

      <Paragraph>
        Добро пожаловать в раздел типизированных ссылок! Здесь вы можете изучить различные подходы к навигации в React
        приложениях.
      </Paragraph>

      <Divider />

      <Title level={2}>Типы ссылок</Title>

      <Space direction='vertical' size='large' style={{ width: '100%' }}>
        <Card>
          <Title level={3}>🧭 Navigate</Title>
          <Paragraph>
            Программная навигация с использованием хука useNavigate для динамического перехода между страницами.
          </Paragraph>
          <Link to='/links/navigate'>Перейти к примерам Navigate →</Link>
        </Card>

        <Card>
          <Title level={3}>📝 String Links</Title>
          <Paragraph>Строковые ссылки - простые текстовые пути для навигации между страницами приложения.</Paragraph>
          <Link to='/links/string'>Перейти к примерам String →</Link>
        </Card>

        <Card>
          <Title level={3}>⚙️ Function Links</Title>
          <Paragraph>
            Функциональные ссылки с параметрами для создания динамических маршрутов с типизированными аргументами.
          </Paragraph>
          <Link to='/links/function'>Перейти к примерам Function →</Link>
        </Card>

        <Card>
          <Title level={3}>🔀 Interpolate Links</Title>
          <Paragraph>Интерполяция ссылок для вставки динамических значений в URL с проверкой типов.</Paragraph>
          <Link to='/links/interpolate'>Перейти к примерам Interpolate →</Link>
        </Card>
      </Space>

      <Divider />

      <Text type='secondary'>
        <Link to='/'>← Вернуться на главную</Link>
      </Text>
    </Layout>
  );
}
