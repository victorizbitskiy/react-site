import React, { FC } from 'react';
import { useNavigate} from 'react-router-dom';
import { IPost } from '../models/IPost';

interface IPostItemProps {
  post: IPost,
}

const PostItem: FC<IPostItemProps> = ({post}) => {  
  let navigate = useNavigate()

  const postOpen = () => {
    console.log(post.id);
    
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className='post' onClick={postOpen}>
      <div>
       {post.id}. {post.title}
        <div className='post-body'>
          {post.body}
        </div>
    </div>      
  </div>
  );
};

export default PostItem;