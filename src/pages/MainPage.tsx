import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <Layout>
      <Typography.Title>Добро пожаловать на FrontendConf 2025!</Typography.Title>

      <Typography.Text>Здесь вы узнаете про</Typography.Text>
      <Link to='linkID'>типизированные линки</Link>
    </Layout>
  );
}
