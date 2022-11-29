import React, { FC, useEffect } from "react";
import 'antd/dist/reset.css';
import './App.css';
import {Layout} from "antd"
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

const { Content, Footer } = Layout;

const App: FC = () => {

  useEffect(() => {
  }, [])
  
  return (
  <Layout>
    <Navbar />
    <AppRouter />
    <Footer style={{ textAlign: 'center' }}>Copyright ©2022 All rights reserved</Footer>
  </Layout>
  );
};

export default App;
