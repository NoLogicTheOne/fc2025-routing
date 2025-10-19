import { Layout, Typography, Card, Space, Divider } from 'antd';
import { TypedLink } from '../components/TypedLink';
import { ROUTES } from '../constants/routes';

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
