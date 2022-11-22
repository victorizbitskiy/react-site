import React, { FC } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPosts } from "./store/reducers/ActionCreators"

const App: FC = () => {
  const dispatch = useAppDispatch()
  const {posts} = useAppSelector(state => state.userReducer)

  useEffect(() =>{
    dispatch(fetchPosts())
  }, [])

  return (
  <div>
    {JSON.stringify(posts, null, 2)}
  </div>
  );
};

export default App;
