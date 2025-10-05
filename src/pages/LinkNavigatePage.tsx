import { Layout, Typography, Card, Button, Space, Divider } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

export function LinkNavigatePage() {
  const navigate = useNavigate();

  const handleNavigateToString = () => {
    navigate('/linkID/string');
  };

  const handleNavigateToFunction = () => {
    navigate('/linkID/function');
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <Layout style={{ padding: '24px' }}>
      <Title level={1}>🧭 Navigate Links</Title>

      <Paragraph>
        Программная навигация с использованием хука <Text code>useNavigate</Text> позволяет осуществлять переходы между
        страницами из JavaScript кода, например, после выполнения какого-либо действия или валидации.
      </Paragraph>

      <Divider />

      <Title level={2}>Примеры использования</Title>

      <Card title='Программная навигация' style={{ marginBottom: '16px' }}>
        <Space wrap>
          <Button type='primary' onClick={handleNavigateToString}>
            Перейти к String Links
          </Button>
          <Button onClick={handleNavigateToFunction}>Перейти к Function Links</Button>
          <Button onClick={handleNavigateBack}>Назад (history.back)</Button>
        </Space>
      </Card>

      <Title level={3}>Навигация по другим страницам</Title>
      <Space direction='vertical'>
        <Link to='/links'>← Вернуться к списку типов ссылок</Link>
        <Link to='/links/string'>📝 String Links →</Link>
        <Link to='/links/function'>⚙️ Function Links →</Link>
        <Link to='/links/interpolate'>🔀 Interpolate Links →</Link>
        <Link to='/'>🏠 На главную →</Link>
      </Space>
    </Layout>
  );
}
