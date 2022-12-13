import React, { FC, useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import { IPost } from '../models/IPost';

interface IPostItemProps {
  post: IPost,
}

const PostItem: FC<IPostItemProps> = ({post}) => {  
  let navigate = useNavigate()
  const [postContent, setPostContent] = useState<IPost>(post) 

  const postOpen = () => {
    navigate("post")
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