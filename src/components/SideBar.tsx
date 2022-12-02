import React, { FC } from 'react';
import { Menu, MenuProps } from 'antd';
import {Layout} from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const {Sider} = Layout

const SideBar: FC = () => {
  return (
  <Sider className="site-layout-background" width={200} style={{ padding: '24px 0', background: '#ffffff' }} />
  );
};

export default SideBar;