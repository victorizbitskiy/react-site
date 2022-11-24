import React, { FC } from "react";
import { useEffect } from "react";
import Posts from "./components/Posts";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPosts } from "./store/reducers/ActionCreators"

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [])

  const {posts, isLoading, error} = useAppSelector(state => state.userReducer)

  return (
  <div>
    {isLoading && <h1>Идет загрузка...</h1>}
    {error && <h1>{error}</h1>}
    <Posts posts={posts}/>
    {/* {posts.length > 0 && JSON.stringify(posts, null, 2)} */}
  </div>
  );
};

export default App;
