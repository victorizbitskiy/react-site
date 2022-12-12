import React, { FC } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Work from '../pages/Work';
import NavigateExternal from './NavigateExternal';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/post" element={<Post />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/github" element={<NavigateExternal to="https://github.com/victorizbitskiy"/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;