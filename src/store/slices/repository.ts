import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../../libs/axios';

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
