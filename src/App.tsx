import React, { FC } from "react";
import 'antd/dist/reset.css';
import './App.css';
import {Layout} from "antd"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";

const App: FC = () => {  
  return (
  <Layout >
    <Navbar />
    <Layout style={{ padding: '24px 0', background: 'white' }}>
      <SideBar />
        <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
          <AppRouter />
        </Layout.Content>
      <SideBar />
    </Layout>
    <div className="App-footer" >
    <Layout.Footer >
        Copyright ©2022 All rights reserved
    </Layout.Footer>
    </div>

  </Layout>
  );
};

export default App;
