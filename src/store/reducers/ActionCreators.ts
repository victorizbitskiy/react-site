import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../models/IPost";
import { AppDispatch } from "../store";
import { postSlice } from "./PostSlice"

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить посты")
    }
  }
)
