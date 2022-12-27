import { AutoComplete, FloatButton, Input, Pagination, PaginationProps, SelectProps, Spin } from 'antd';
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

  const {posts, isLoading, error, totalPages} = useAppSelector(state => state.postsReducer)

  const [currentSelectValue, setSelectValue] = useState('')

  const onChangePagination: PaginationProps['onChange'] = (page) => {
    setSelectValue(currentSelectValue)
    dispatch(fetchPosts({
      page: page,
      titleLike: currentSelectValue,
    }))
  }

  const selectOnChange = (inputValue, option) => {
    if (inputValue){
      dispatch(fetchPosts({
        titleLike: inputValue
    }))
    }
  }

  return (
    <Layout className='Pages-layout' >
      <Layout.Content >
      <div style={{height: '10px', textAlign: 'center'}}>{isLoading && <Spin />}</div>
      {error && <h1>{error}</h1>}

      <AutoComplete
        style={{ width: 200 }}
        placeholder="try to type something"
        onChange={selectOnChange}
      />

      <Posts posts={posts}/>

      <Pagination  
        total={totalPages} 
        onChange={onChangePagination}
        style={{marginTop: '10px', display: 'flex', justifyContent: 'center' }}
      />      
    <FloatButton.BackTop visibilityHeight={0} style={{bottom: '70px'}}/>
    </Layout.Content>
    </Layout>
    
  );
};

export default Home;