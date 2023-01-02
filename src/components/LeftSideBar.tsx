import React, { FC } from 'react';
import {Layout} from "antd"

const {Sider} = Layout

const SideBar: FC = () => {
  return (
  <Sider 
    className="site-layout-background" 
    width={200} 
    style={{ padding: '24px 0', background: '#ffffff' }} 
    />
  );
};

export default SideBar;