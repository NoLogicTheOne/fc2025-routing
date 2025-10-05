import { Layout, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

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

      <Title level={2}>Примеры интерполяции</Title>
      <Paragraph>
        <Text code title=''>
          /$COMMON_LINK_ID/navigate`
        </Text>
      </Paragraph>

      <Divider />

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <Link to={`/${COMMON_LINK_ID}`}>← Вернуться к списку типов ссылок</Link>
        <Link to={`/${COMMON_LINK_ID}/navigate`}>🧭 Navigate Links →</Link>
        <Link to={`/${COMMON_LINK_ID}/string`}>📝 String Links →</Link>
        <Link to={`/${COMMON_LINK_ID}/function`}>⚙️ Function Links →</Link>
        <Link to={`/`}>🏠 На главную →</Link>
      </Space>
    </Layout>
  );
}
