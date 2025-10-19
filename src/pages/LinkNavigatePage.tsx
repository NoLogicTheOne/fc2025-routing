import { Layout, Typography, Card, Button, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TypedLink } from '../components/TypedLink';
import { ROUTES } from '../constants/routes';

const { Title, Paragraph, Text } = Typography;

export function LinkNavigatePage() {
  const navigate = useNavigate();

  const handleNavigateToString = () => {
    navigate('/links/string');
  };

  const handleNavigateToFunction = () => {
    navigate('/links/function');
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

      <Card title='Преимущества программной навигации'>
        <Paragraph>
          • Контроль за процессом исполнения программы
          <br />
          • Возможность использовать кнопки и другие контролы в качестве ссылок
          <br />
        </Paragraph>
      </Card>

      <Divider />

      <Card title='Недостатки программной навигации'>
        <Paragraph>
          • Не подходит для классических ссылок, из-за чего теряется унификация
          <br />
          • Децентрализация, из-за которой ослабляется контроль за роутингом
          <br />
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
