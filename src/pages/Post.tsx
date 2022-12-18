import { Layout } from 'antd';
import {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPostById } from '../store/reducers/ActionCreators';
import '../pages/pages.css'

const Post: FC = ()  => {
  const {id} =  useParams<{id: string}>()
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPostById(Number(id)))
  }, [])

  const {post, isLoading, error} = useAppSelector(state => state.postReducer)

  return (
    <Layout className='Pages-layout' >
      <Layout.Content>
        {error && <h1>Ошибка</h1>}
        {isLoading ?
        <div style={{height: '10px'}}>
          {<h1>Идет загрузка...</h1>}
        </div>
        :
        <div>
          {post.id}. {post.title}
          <div>
            {post.body}
          </div>
        </div>
      }
     </Layout.Content>
   </Layout>
  );
};

export default Post;