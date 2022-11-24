import React, { FC } from 'react';
import { IPost } from '../models/IPost';
import PostItem from './PostItem';

interface IPostsProps{
  posts: IPost[]
}

const Posts: FC<IPostsProps> = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map(post => 
        <PostItem post={post}/>
        )}
    </div>
  );
};

export default Posts;