import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../../libs/axios';

export const loadRepositories = createAsyncThunk(
  'repositories/load',
  async () => {
    const response = await api.get('users/mariana-pereira/repos');

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
    load: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRepositories.pending, (state, action) => {
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
