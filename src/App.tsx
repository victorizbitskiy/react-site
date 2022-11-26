import React, { FC } from "react";
import { useEffect } from "react";
import Posts from "./components/Posts";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPosts } from "./store/reducers/ActionCreators"
import 'antd/dist/reset.css';
import './App.css';
import {Breadcrumb, Layout} from "antd"
import Navbar from "./components/Navbar";

const { Content, Footer } = Layout;

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [])

  const {posts, isLoading, error} = useAppSelector(state => state.userReducer)

  return (
  <Layout>
    <Navbar />
    <Content style={{ padding: '0 50px' }}>

    {isLoading && <h1>Идет загрузка...</h1>}
    {error && <h1>{error}</h1>}
    <Posts posts={posts}/>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Copyright ©2022 All rights reserved</Footer>
  </Layout>
  );
};

export default App;
