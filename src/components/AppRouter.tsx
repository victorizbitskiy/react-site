import React, { FC } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Work from '../pages/Work';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Home/>}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/posts/:id" element={<Post/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;