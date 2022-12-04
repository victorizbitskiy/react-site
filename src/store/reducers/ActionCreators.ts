import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../models/IPost";
import { useState } from 'react';

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
