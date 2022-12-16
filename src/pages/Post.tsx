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
   </Content>
  );
};

export default Post;