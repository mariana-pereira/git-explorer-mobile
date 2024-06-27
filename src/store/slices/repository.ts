import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../../libs/axios';

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: Date;
}

export const loadRepositories = createAsyncThunk(
  'repositories/load',
  async (login: string) => {
    const response = await api.get(`users/${login}/repos`);

    return response.data;
  }
);

const repositorySlice = createSlice({
  name: 'repositories',
  initialState: {
    data: [],
    error: false,
    loading: false,
  },

  reducers: {
    load: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRepositories.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(loadRepositories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  }
});

export const repositories = repositorySlice.reducer;

export const { load } = repositorySlice.actions;
