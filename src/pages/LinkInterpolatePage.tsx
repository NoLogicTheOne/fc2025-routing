import { Layout, Typography, Space, Divider, Card } from 'antd';
import { TypedLink } from '../components/TypedLink';
import { ROUTES } from '../constants/routes';

const { Title, Paragraph } = Typography;

const COMMON_LINK_ID = 'linkId';

export function LinkInterpolatePage() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>🔀 Interpolate Links</Title>

      <Paragraph>
        Интерполяция ссылок позволяет создавать динамические URL используя шаблоны с заполнителями (плейсхолдерами). Это
        мощный инструмент для создания гибких и переиспользуемых ссылок с типизированными параметрами.
      </Paragraph>

      <Divider />

      <Card title='Преимущества интерполяции ссылок'>
        <Paragraph>
          • Наглядный результат сразу
          <br />
          • Переиспользование переменных, более простые изменения
          <br />
        </Paragraph>
      </Card>

      <Divider />

      <Card title='Недостатки интерполяции ссылок'>
        <Paragraph>
          • Сложность проверки, что роут существует
          <br />
          • Децентрализация, из-за которой ослабляется контроль за роутингом
          <br />
        </Paragraph>
      </Card>

      <Divider />

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <TypedLink to={ROUTES.links} params={{ linkId: COMMON_LINK_ID }}>
          ← Вернуться к списку типов ссылок
        </TypedLink>
        <TypedLink to={ROUTES.linkNavigate} params={{ linkId: COMMON_LINK_ID }}>
          🧭 Navigate Links →
        </TypedLink>
        <TypedLink to={ROUTES.linkFunction} params={{ linkId: COMMON_LINK_ID }}>
          ⚙️ Function Links →
        </TypedLink>
        <TypedLink to={ROUTES.linkInterpolate} params={{ linkId: COMMON_LINK_ID }}>
          🔀 Interpolate Links →
        </TypedLink>
        <TypedLink to={ROUTES.home}>🏠 На главную →</TypedLink>
      </Space>
    </Layout>
  );
}
