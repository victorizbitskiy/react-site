import React, { FC } from "react";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

const App: FC = () => {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  const dispatch = useAppDispatch()
  
  return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment(1))}>INCREMENT</button>
  </div>
  );
};

export default App;
