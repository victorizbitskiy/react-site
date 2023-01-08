import React, { FC } from 'react';
import {Layout} from "antd"
import './components.css'

const {Sider} = Layout

const SideBar: FC = () => {
  return (
    <>
      <Sider className='side-bar' width={200}/>
    </>
  );
};

export default SideBar;