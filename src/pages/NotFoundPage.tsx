import { Result, Button, Card, Typography, Space, Row, Col } from 'antd';
import { HomeOutlined, ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

export function NotFoundPage() {
  const navigate = useNavigate();

  const popularPages = [
    { title: 'Главная страница', path: '/', description: 'Основная информация о конференции' },
    { title: 'Докладчики', path: '/speakers', description: 'Спикеры и их доклады' },
    { title: 'Расписание', path: '/schedule', description: 'Программа мероприятия' },
    { title: 'Спонсоры', path: '/sponsors', description: 'Наши партнёры и спонсоры' },
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      <Result
        status="404"
        title="404"
        subTitle="К сожалению, запрашиваемая страница не найдена."
        extra={
          <Space size="large">
            <Button 
              type="primary" 
              icon={<HomeOutlined />}
              onClick={() => navigate('/')}
              size="large"
            >
              На главную
            </Button>
            <Button 
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate(-1)}
              size="large"
            >
              Назад
            </Button>
          </Space>
        }
      />

      <div style={{ marginTop: 48, maxWidth: 800, margin: '48px auto 0' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 32 }}>
          Возможно, вас заинтересует
        </Title>
        
        <Row gutter={[16, 16]}>
          {popularPages.map((page) => (
            <Col xs={24} sm={12} key={page.path}>
              <Card 
                hoverable
                onClick={() => navigate(page.path)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Meta
                  title={page.title}
                  description={page.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Card 
        style={{ 
          marginTop: 48, 
          maxWidth: 600, 
          margin: '48px auto 0',
          textAlign: 'center',
          backgroundColor: '#f0f2f5'
        }}
      >
        <Title level={4}>Нужна помощь?</Title>
        <Paragraph>
          Если вы считаете, что это ошибка, или не можете найти нужную информацию, 
          свяжитесь с нами:
        </Paragraph>
        <Space direction="vertical" size="small">
          <Text>
            📧 Email: <a href="mailto:support@fc2025.ru">support@fc2025.ru</a>
          </Text>
          <Text>
            💬 Telegram: <a href="https://t.me/fc2025_support" target="_blank" rel="noopener noreferrer">@fc2025_support</a>
          </Text>
          <Text>
            📱 Телефон: <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </Text>
        </Space>
      </Card>

      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <Title level={4}>Демонстрация wildcard роута</Title>
        <Paragraph style={{ maxWidth: 600, margin: '0 auto' }}>
          Эта страница отображается для всех несуществующих роутов благодаря 
          wildcard роуту <Text code>path="*"</Text> в конфигурации React Router.
          Это соответствует <Text code>RouteIds.any</Text> из файла констант.
        </Paragraph>
        
        <div style={{ marginTop: 24 }}>
          <Text type="secondary">
            Попробуйте перейти по несуществующему адресу, например: 
          </Text>
          <br />
          <Space wrap style={{ marginTop: 8 }}>
            <Link to="/nonexistent">
              <Button type="link" icon={<SearchOutlined />}>
                /nonexistent
              </Button>
            </Link>
            <Link to="/random/path/123">
              <Button type="link" icon={<SearchOutlined />}>
                /random/path/123
              </Button>
            </Link>
            <Link to="/test">
              <Button type="link" icon={<SearchOutlined />}>
                /test
              </Button>
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
}