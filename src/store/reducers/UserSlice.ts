import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
  count: 0
}

export const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    }

  }
})

export default userSlice.reducer;