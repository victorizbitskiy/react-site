import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IPost } from '../models/IPost';
import { fetchPostById } from '../store/reducers/ActionCreators';

const Post: FC = ()  => {
  const {id} =  useParams<{id: string}>()
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPostById(Number(id)))
  }, [])

  const {post, isLoading, error} = useAppSelector(state => state.postReducer)

  return (
    <div>
    {post.id}. {post.title}
     <div>
       {post.body}
     </div>
 </div>  
  );
};

export default Post;