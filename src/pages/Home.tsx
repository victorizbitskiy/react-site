import { AutoComplete, FloatButton, Input, Pagination, PaginationProps, SelectProps, Spin } from 'antd';
import {Layout} from 'antd';
import { FC, useEffect, useState } from 'react';
import Posts from '../components/Posts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchPostByTitleLike } from '../store/reducers/ActionCreators';
import '../pages/pages.css'

const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts(1))
  }, [])

  const {posts, isLoading, error, totalPages} = useAppSelector(state => state.postsReducer)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePagination: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
    dispatch(fetchPosts(page))
  }
  const options = posts.map(post => ({
    value: `${post.id}. ${post.title}`
    }))

  const filterOption = (inputValue, option) => {
    return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }

  const {postsLike, isLoadingLike, errorLike} = useAppSelector(state => state.postsByTitleLikeReducer)

  const onChange = (inputValue, option) => {
    if (inputValue){
      dispatch(fetchPostByTitleLike(inputValue))
    }
  }

  return (
    <Layout className='Pages-layout' >
      <Layout.Content >
      <div style={{height: '10px', textAlign: 'center'}}>{isLoading && <Spin />}</div>
      {error && <h1>{error}</h1>}

      <AutoComplete
        style={{ width: 200 }}
        // options={options}
        placeholder="try to type something"
        // filterOption={filterOption}
        onChange={onChange}
      />

      <div className='posts'>
        {postsLike.map(post => 
          <div>{post.title}</div> 
          )}
      </div>

      <Posts posts={posts}/>


      <Pagination 
        current={currentPage} 
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