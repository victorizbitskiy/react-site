import React, { FC } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header} = Layout;

const Navbar : FC = () => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(7).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  </Layout>
  );
};

export default Navbar;