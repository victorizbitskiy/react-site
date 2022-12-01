import React, { FC } from 'react';
import { Menu, MenuProps } from 'antd';
import {Layout} from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const {Sider} = Layout

const SideBar: FC = () => {
  return (
  <Sider className="site-layout-background" width={200}>
    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%' }}
    />
  </Sider>
  );
};

export default SideBar;