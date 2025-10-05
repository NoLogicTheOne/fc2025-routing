import { Layout, Typography, Card, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const generateLinksPath = (subpath?: string) => (subpath ? `/links/${subpath}` : '/links');

export function LinkFunctionPage() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>⚙️ Function Links</Title>

      <Paragraph>
        Для создания функциональной ссылки вы создаете функцию, которая возвращает полный роут. Например,{' '}
        <Text code>{generateLinksPath.toString()}</Text>
      </Paragraph>

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

      <Card title='Недостаток функциональных ссылок'>
        <Paragraph>
          Для вас нет подсветки, что какого-то роута больше не существует или он изменен, за всем необходимо следить в
          ручном режиме
        </Paragraph>
      </Card>

      <Divider />

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <Link to={generateLinksPath()}>← Вернуться к списку типов ссылок</Link>
        <Link to={generateLinksPath('navigate')}>🧭 Navigate Links →</Link>
        <Link to={generateLinksPath('string')}>📝 String Links →</Link>
        <Link to={generateLinksPath('interpolate')}>🔀 Interpolate Links →</Link>
        <Link to='/'>🏠 На главную →</Link>
      </Space>
    </Layout>
  );
}
