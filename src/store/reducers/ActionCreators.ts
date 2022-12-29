import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IPost, PostsRequestsParams } from "../../models/IPost";

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (input:  PostsRequestsParams, thunkAPI) => {
    try {
      if (input.page) {
        const response = Array( (await axios.get<[]>(`https://jsonplaceholder.typicode.com/posts?title_like=${input.titleLike}`)).data)
        const totalPosts = response[0].length 
        const postsFrom = input.page * 10 - 10 
        const postsTo = input.page * 10 
        const posts = response[0].slice(postsFrom, postsTo)
        return ({ 
          posts: posts,
          totalPosts: totalPosts // response.headers["x-total-count"],
        })
  
      }else{
        const response = Array( (await axios.get<[]>(`https://jsonplaceholder.typicode.com/posts?title_like=${input.titleLike}`)).data)
        const totalPosts = response[0].length 
        const postsFrom = 1 * 10 - 10 
        const postsTo = 1 * 10 
        const posts = response[0].slice(postsFrom, postsTo)
        return ({ 
          posts: posts,
          totalPosts: totalPosts // response.headers["x-total-count"],
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