import { Content } from 'antd/es/layout/layout';
import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPostById } from '../store/reducers/ActionCreators';

const Post: FC = ()  => {
  const {id} =  useParams<{id: string}>()
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPostById(Number(id)))
  }, [])

  const {post, isLoading, error} = useAppSelector(state => state.postReducer)

  return (
    <Content style={{ padding: '0 50px' }}>
      <div style={{height: '10px'}}>{isLoading && <h1>Идет загрузка...</h1>}</div>
      {error && <h1>{error}</h1>}   
      {post.id}. {post.title}
      <div>
        {post.body}
     </div>
   </Content>
  );
};

export default Post;