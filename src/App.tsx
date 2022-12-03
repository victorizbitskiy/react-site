import React, { FC, useEffect } from "react";
import 'antd/dist/reset.css';
import './App.css';
import {Layout} from "antd"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";

const { Content, Footer} = Layout;

const App: FC = () => {

  // useEffect(() => {
  // }, [])
  
  return (
  <Layout>
    <Navbar />
    <Layout className="site-layout-background" style={{ padding: '24px 0', background: '#ffffff' }}>
        <SideBar />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <AppRouter />
        </Content>
        <SideBar />
      </Layout>
    <Footer style={{ textAlign: 'center', position: "static", bottom: "0" }}>Copyright ©2022 All rights reserved</Footer>
  </Layout>
  );
};

export default App;
