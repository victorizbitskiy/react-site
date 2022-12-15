import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../models/IPost";

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (page: number, thunkAPI) => {
    try {
      const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      return ({ 
        posts: response.data,
        totalPages: response.headers["x-total-count"],
      })

    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить посты")
    }
  }
)

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (id: number, thunkAPI) => {
    try {
      let response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пост")
    }
  }
)
