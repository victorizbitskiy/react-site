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
        <PostItem key={post.id} post={post} />
        )}
    </div>
  );
};

export default Posts;