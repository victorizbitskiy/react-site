import {FloatButton, Input, Pagination, PaginationProps, SelectProps, Spin } from 'antd';
import {Layout} from 'antd';
import { FC, useEffect, useState } from 'react';
import Posts from '../components/Posts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts} from '../store/reducers/ActionCreators';
import '../pages/pages.css'

const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts({ page: 1, titleLike: '' }))
  }, [])

  const {posts, isLoading, error, totalPosts} = useAppSelector(state => state.postsReducer)
  const [currentSelectValue, setSelectValue] = useState('')

  const onChangePagination: PaginationProps['onChange'] = (page) => {
    setSelectValue(currentSelectValue)
    dispatch(fetchPosts({
      page: page,
      titleLike: currentSelectValue,
    }))
  }

  return (
    <Layout className='pages-layout' >
      <Layout.Content >
        <div className='page-home-spin'>
          {isLoading && <Spin />}
        </div>
        {error && <h1>{error}</h1>}

        <Posts posts={posts}/>
        <Pagination 
          className='page-home-pagination' 
          defaultCurrent={1}
          total={totalPosts} 
          onChange={onChangePagination}
        />      
        <FloatButton.BackTop visibilityHeight={0} style={{bottom: '70px'}}/>
      </Layout.Content>
    </Layout>
    
  );
};

export default Home;