import React, { FC } from 'react';
import { Layout, Menu, MenuProps } from 'antd';

const { Header} = Layout;

const items: MenuProps['items'] = [
  {
    label: <a href='/' target="_blank" rel='noopener noreferrer'>Home</a>,
    key: 'home',
  },
  {
    label: <a href='/work' target="_blank" rel='noopener noreferrer'>Work</a>,
    key: 'work',
  },
  {
    label: <a href='https://github.com/victorizbitskiy' target="_blank" rel='noopener noreferrer'>GitGub</a>,
    key: 'github',
  },
]

const Navbar : FC = () => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{justifyContent: "center"}}
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Header>
  </Layout>
  );
};

export default Navbar;