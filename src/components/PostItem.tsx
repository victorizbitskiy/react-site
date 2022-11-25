import React, { FC } from 'react';
import { IPost } from '../models/IPost';

interface IPostItemProps {
  post: IPost,
}

const PostItem: FC<IPostItemProps> = ({post}) => {
  return (
    <div className='post'>
      <div>
        {post.title}
        <div className='post-body'>
          {post.body}
        </div>
    </div>      
  </div>
  );
};

export default PostItem;