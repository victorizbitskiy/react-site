import { Pagination, PaginationProps, Spin } from 'antd';
import {Layout} from 'antd';
import { FC, useEffect, useState } from 'react';
import Posts from '../components/Posts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/ActionCreators';
import '../pages/pages.css'

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
    <Layout className='Pages-layout' >
      <Layout.Content >
      <div style={{height: '10px', textAlign: 'center'}}>{isLoading && <Spin />}</div>
      {error && <h1>{error}</h1>}
      <Posts posts={posts}
      />
      <Pagination 
      current={currentPage} 
      total={totalPages} 
      onChange={onChange}
      style={{marginTop: '10px', display: 'flex', justifyContent: 'center' }}
      />
    </Layout.Content>
    </Layout>
    
  );
};

export default Home;