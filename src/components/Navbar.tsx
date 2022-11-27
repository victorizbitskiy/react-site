import React, { FC } from 'react';
import { Layout, Menu, MenuProps } from 'antd';

const { Header} = Layout;

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'key1',
  },
  {
    label: 'Navigation Two',
    key: 'key2',
  },
  {
    label: 'Navigation Three',
    key: 'key3',
  },
  {
    label: 'Navigation Four',
    key: 'key4',
  },
  {
    label: 'Navigation Five',
    key: 'key5',
  },
  {
    label: 'Navigation Six',
    key: 'key6',
  },
  {
    label: 'Navigation Seven',
    key: 'key7',
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
        defaultSelectedKeys={['2']}
        items={items}
      />
    </Header>
  </Layout>
  );
};

export default Navbar;