import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IPost, PostsRequestsParams } from "../../models/IPost";

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (input:  PostsRequestsParams, thunkAPI) => {
    try {
      if (input.page) {
        const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts?_page=${input.page}`)
        return ({ 
          posts: response.data,
          totalPages: response.headers["x-total-count"],
        })
  
      }else{
        const response = (await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts?title_like=${input.titleLike}`))
        console.log(response);
        
        return ({ 
          posts: response.data,
          totalPages: Array( response.data).length,
        })
  
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить посты")
    }
  }
)

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (id: number, thunkAPI) => {
    try {
        return (await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пост")
    }
  }
)