import { Breadcrumb, Layout, Spin } from 'antd';
import {FC, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPostById } from '../store/reducers/ActionCreators';
import Title from 'antd/es/typography/Title';
import '../pages/pages.css'

const Post: FC = ()  => {
  const {id} =  useParams<{id: string}>()
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPostById(Number(id)))
  }, [])

  const {post, isLoading, error} = useAppSelector(state => state.postReducer)

  return (
    <Layout className='Pages-layout'>
        <Layout.Content>
          {error && <h1>Ошибка</h1>}

          <Breadcrumb>
            <Breadcrumb.Item ><Link to="/posts">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
          </Breadcrumb>

          {isLoading ?
            <div style={{ height: '10px' }}>
              <Spin />
            </div>
            :
            <div>
              <Title level={2}>{post.id}. {post.title}</Title>

              <div>
                {post.body}
              </div>
            </div>}
        </Layout.Content>
      </Layout>
  );
};

export default Post;