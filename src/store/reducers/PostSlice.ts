import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, PostResponse } from "../../models/IPost";
import { fetchPosts } from "./ActionCreators";

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  totalPages: Number;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
  totalPages: 0,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled.type, (state, action: PayloadAction<PostResponse>) => {
        state.isLoading = false
        state.error = ''
        state.posts = action.payload.posts
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchPosts.pending.type, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPosts.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default postSlice.reducer;