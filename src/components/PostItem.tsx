import React, { FC } from 'react';
import { useNavigate} from 'react-router-dom';
import { IPost } from '../models/IPost';

interface IPostItemProps {
  post: IPost,
}

const PostItem: FC<IPostItemProps> = ({post}) => {  
  let navigate = useNavigate()

  const postOpen = () => {   
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className='post' onClick={postOpen}>
      <div>
       {post.id}. {post.title}
        <div className='post-body'>
          {post.body.slice(0, 50)}...
        </div>
      </div>      
    </div>
  );
};

export default PostItem;