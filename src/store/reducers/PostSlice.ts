import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useActionData } from "react-router-dom";
import { IPost } from "../../models/IPost";
import { fetchPosts } from "./ActionCreators";

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false
      state.error = ''
      state.posts = action.payload
    },
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  }
})

export default postSlice.reducer;