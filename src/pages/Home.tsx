import { Content } from 'antd/es/layout/layout';
import React, { FC, useEffect } from 'react';
import Posts from '../components/Posts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/ActionCreators';

const Home: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [])

  const {posts, isLoading, error, totalPages} = useAppSelector(state => state.postReducer)
  
  {console.log(totalPages)}

  return (
    <Content style={{ padding: '0 50px' }}>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <Posts posts={posts}/>
    </Content>
  );
};

export default Home;