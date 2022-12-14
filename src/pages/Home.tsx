import { Pagination, PaginationProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { FC, useEffect, useState } from 'react';
import Posts from '../components/Posts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/ActionCreators';

const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts(1))
  }, [])

  const {posts, isLoading, error, totalPages} = useAppSelector(state => state.postsReducer)
  const [currentPage, setCurrentPage] = useState(1)
  
  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
    dispatch(fetchPosts(page))
  }

  return (
    <Content style={{ padding: '0 50px' }}>
      <div style={{height: '10px'}}>{isLoading && <h1>Идет загрузка...</h1>}</div>
      {error && <h1>{error}</h1>}
      <Posts posts={posts}/>
      <Pagination 
      current={currentPage} 
      total={totalPages} 
      onChange={onChange}
      style={{marginTop: '10px', display: 'flex', justifyContent: 'center' }}
      />
    </Content>
  );
};

export default Home;