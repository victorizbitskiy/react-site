import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from './reducers/PostsSlice';
import postReducer from './reducers/PostSlice';

const rootReducer = combineReducers({
  postsReducer, 
  postReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] 