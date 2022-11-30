import React, { FC } from 'react';
import { Menu, MenuProps } from 'antd';
import {Layout} from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const {Sider} = Layout

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const SideBar: FC = () => {
  return (
  <Sider className="site-layout-background" width={200}>
    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%' }}
    items={items2}
    />
  </Sider>
  );
};

export default SideBar;