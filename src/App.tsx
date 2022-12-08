import React, { FC, useEffect } from "react";
import 'antd/dist/reset.css';
import './App.css';
import {Layout} from "antd"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";

const App: FC = () => {

  // useEffect(() => {
  // }, [])
  
  return (
  <Layout>
    <Navbar />
    <Layout className="site-layout-background" style={{ padding: '24px 0', background: 'white' }}>
      <SideBar />
        <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
          <AppRouter />
        </Layout.Content>
      <SideBar />
    </Layout>
    <Layout.Footer style={{ 
        borderTop: '1px solid #e8e8e8',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center'}}
        >
          Copyright ©2022 All rights reserved</Layout.Footer>
  </Layout>
  );
};

export default App;
