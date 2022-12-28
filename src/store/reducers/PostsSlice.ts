import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, PostsResponse } from "../../models/IPost";
import { fetchPosts } from "./ActionCreators";

interface PostsState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  totalPosts: number;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: '',
  totalPosts: 0,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled.type, (state, action: PayloadAction<PostsResponse>) => {
        state.isLoading = false
        state.error = ''
        state.posts = action.payload.posts
        state.totalPosts = action.payload.totalPosts
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

export default postsSlice.reducer;