import { Breadcrumb, Layout, Spin, Rate} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPostById } from '../store/reducers/ActionCreators';
import Title from 'antd/es/typography/Title';
import '../pages/pages.css'

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const Post: FC = ()  => {
  const {id} =  useParams<{id: string}>()
  const dispatch = useAppDispatch()
  const [rateValue, setRateValue] = useState(null)

  useEffect(() =>{
    dispatch(fetchPostById(Number(id)))
    setRateValue(+localStorage.getItem(id))
  }, [])

  const {post, isLoading, error} = useAppSelector(state => state.postReducer)
 
  const setRateValueToLocalStorage = ( value: number ) => {
    setRateValue(value)
    localStorage.setItem(post.id.toString(), value.toString())
  }

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

          <Rate 
          character={({ index }: { index: number }) => customIcons[index + 1]}
          onChange={setRateValueToLocalStorage} 
          value={rateValue}
           />
        </Layout.Content>
      </Layout>
  );
};

export default Post;