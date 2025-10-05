import { Card, Divider, Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <Layout style={{ padding: '24px' }}>
      <Typography.Title>Добро пожаловать на FrontendConf 2025!</Typography.Title>

      <Card>
        <Typography.Title level={3}>Поговорим про навигацию и как ее централизовать</Typography.Title>
        <Typography.Paragraph>
          Навигация в приложении может быть очень сложной, есть куча способов отправить пользователя на другую страницу
          <br />И разработчики используют их все! Ниже есть ссылка на примеры разных способов навигации
        </Typography.Paragraph>
        <Link to='/links/navigate'>Перейти к примерам Navigate →</Link>
      </Card>

      <Divider />

      <Card>
        <Typography.Title level={3}>Как с этим жить?</Typography.Title>
        <Typography.Paragraph>
          Мы уберем все проблемы этой навигации и оставим приложение, за правильностью работы которого будет следить
          Typescript
        </Typography.Paragraph>
        <Typography.Paragraph>
          После работы у вас останется код, который можно изучать или использовать
        </Typography.Paragraph>
      </Card>
    </Layout>
  );
}
