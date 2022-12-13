import React, {FC, useState} from 'react';
import { IPost } from '../models/IPost';

const Post: FC = ()  => {
  const [content, setContent] = useState<IPost>() 
  console.log(content);

  return (
    <div>
    {/* {content.post.id}. {content.post.title}
     <div>
       {content.post.body}
     </div> */}
 </div>  
  );
};

export default Post;