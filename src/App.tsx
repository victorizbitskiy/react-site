import React, { FC } from "react";
import 'antd/dist/reset.css';
import './App.css';
import {Layout} from "antd"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import RightSideBar from "./components/RightSideBar";
import LeftSideBar from "./components/LeftSideBar";

const App: FC = () => {  
  return (
  <Layout >
    <Navbar />
    <Layout className="App-layout">
      <LeftSideBar />
        <Layout.Content className="App-content">
          <AppRouter />
        </Layout.Content>
      <RightSideBar />
    </Layout>
    <Layout.Footer className="App-footer">
        Copyright ©2022 All rights reserved
    </Layout.Footer>
  </Layout>
  );
};

export default App;
