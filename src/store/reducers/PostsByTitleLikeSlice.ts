import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, PostsByTitleLikeResponse, PostsResponse } from "../../models/IPost";
import { fetchPostByTitleLike } from "./ActionCreators";

interface PostsState {
  postsLike: IPost[];
  isLoadingLike: boolean;
  errorLike: string;
}

const initialState: PostsState = {
  postsLike: [],
  isLoadingLike: false,
  errorLike: '',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostByTitleLike.fulfilled.type, (state, action: PayloadAction<PostsByTitleLikeResponse>) => {
        state.isLoadingLike = false
        state.errorLike = ''
        state.postsLike = action.payload.data
      })
      .addCase(fetchPostByTitleLike.pending.type, (state) => {
        state.isLoadingLike = true
      })
      .addCase(fetchPostByTitleLike.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoadingLike = false
        state.errorLike = action.payload
      })
  }
})

export default postsSlice.reducer;