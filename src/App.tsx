import React, { FC } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPosts } from "./store/reducers/ActionCreators"

const App: FC = () => {
  const dispatch = useAppDispatch()
  const {posts, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [])

  return (
  <div>
    {isLoading && <h1>Идет загрузка...</h1>}
    {error && <h1>{error}</h1>}
    {posts.length > 0 && JSON.stringify(posts, null, 2)}
  </div>
  );
};

export default App;
