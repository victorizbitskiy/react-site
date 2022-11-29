import React, { FC, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header} = Layout;

const items: MenuProps['items'] = [
  {
    label: <a href='/' rel='noopener noreferrer'>Home</a>,
    key: 'home',
  },
  {
    label: <a href='/work' rel='noopener noreferrer'>Work</a>,
    key: 'work',
  },
  {
    label: <a href='https://github.com/victorizbitskiy' target="_blank" rel='noopener noreferrer'>GitHub</a>,
    key: 'github',
  },
]

const Navbar : FC = () => {
  
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    e.domEvent.preventDefault() 
    setCurrent(e.key);
    navigate(`/${e.key}`)
  };

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{justifyContent: "center"}}
        selectedKeys={[current]}
        items={items}
        onClick={onClick}
      />
    </Header>
  </Layout>
  );
};

export default Navbar;