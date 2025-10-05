import React, { useState } from 'react';
import { Layout, Menu, theme, Typography, Tag } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  CodeOutlined,
  SettingOutlined,
  FileOutlined,
  AppstoreOutlined,
  BugOutlined,
  ApiOutlined,
  BranchesOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Определяем активный ключ меню на основе текущего пути
  const getSelectedKeys = () => {
    const pathname = location.pathname;

    // Точное совпадение для главной страницы
    if (pathname === '/') {
      return ['/'];
    }

    // Для роутов links с параметрами
    if (pathname.match(/^\/[^/]+\/navigate\/?$/)) {
      return ['/links/navigate'];
    }
    if (pathname.match(/^\/[^/]+\/string\/?$/)) {
      return ['/links/string'];
    }
    if (pathname.match(/^\/[^/]+\/function\/?$/)) {
      return ['/links/function'];
    }
    if (pathname.match(/^\/[^/]+\/interpolate\/?$/)) {
      return ['/links/interpolate'];
    }
    if (pathname.match(/^\/[^/]+\/?$/) && pathname !== '/') {
      return ['/links'];
    }

    // Для других путей используем точное совпадение
    return [pathname];
  };

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to='/'>Главная</Link>,
    },
    {
      key: 'links-submenu',
      icon: <ApiOutlined />,
      label: (
        <span>
          Типизированные ссылки
          <Tag color='blue' style={{ marginLeft: 8, fontSize: 10 }}>
            Links
          </Tag>
        </span>
      ),
      children: [
        {
          key: '/links',
          icon: <AppstoreOutlined />,
          label: <Link to='/links'>Обзор типов ссылок</Link>,
        },
        {
          key: '/links/navigate',
          icon: <BranchesOutlined />,
          label: <Link to='/links/navigate'>🧭 Navigate Links</Link>,
        },
        {
          key: '/links/string',
          icon: <FileOutlined />,
          label: <Link to='/links/string'>📝 String Links</Link>,
        },
        {
          key: '/links/function',
          icon: <SettingOutlined />,
          label: <Link to='/links/function'>⚙️ Function Links</Link>,
        },
        {
          key: '/links/interpolate',
          icon: <CodeOutlined />,
          label: <Link to='/links/interpolate'>🔀 Interpolate Links</Link>,
        },
      ],
    },
    {
      key: '/404',
      icon: <BugOutlined />,
      label: <Link to='/not-found'>404 страница</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme='light'
        width={300}
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div
          style={{
            height: 64,
            margin: 16,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: borderRadiusLG,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {collapsed ? (
            <div style={{ fontSize: 16, fontWeight: 'bold' }}>RT</div>
          ) : (
            <>
              <Title level={4} style={{ color: 'white', margin: 0, fontSize: 16 }}>
                React Router
              </Title>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Типизация & Навигация</Text>
            </>
          )}
        </div>

        <Menu
          mode='inline'
          selectedKeys={getSelectedKeys()}
          items={menuItems}
          style={{ borderRight: 0, height: 'calc(100vh - 96px)' }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 300, transition: 'margin-left 0.2s' }}>
        <Content
          style={{
            margin: 0,
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          {/* Индикатор текущего роута */}
          <div
            style={{
              marginBottom: 24,
              padding: '8px 16px',
              background: '#f0f2f5',
              borderRadius: 6,
              border: '1px solid #d9d9d9',
            }}
          >
            <Text type='secondary' style={{ fontSize: 12 }}>
              Текущий роут:
            </Text>
            <br />
            <Text code style={{ fontSize: 14 }}>
              {location.pathname}
              {location.search}
            </Text>
          </div>

          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
