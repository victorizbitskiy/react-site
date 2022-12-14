import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { fetchPostById } from "./ActionCreators";

interface PostState {
  post: IPost;
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  post: {
    id: 0,
    userId: '',
    title: '',
    body: ''
  },
  isLoading: false,
  error: '',
}

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.fulfilled.type, (state, action: PayloadAction<IPost>) => {
        state.isLoading = false
        state.error = ''
        state.post = action.payload
      })
  }
})

export default postsSlice.reducer;