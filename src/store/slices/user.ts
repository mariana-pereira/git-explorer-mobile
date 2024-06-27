import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../../libs/axios';

// interface User {
//   id: string;
//   login: string;
//   name: string;
//   avatar_url: string;
//   html_url: string;
//   bio: string;
//   followers: number;
//   following: number;
//   public_repos: number;
// }

export const loadUser = createAsyncThunk(
  'user/load',
  async (login: string) => {
    const response = await api.get(`users/${login}`);

    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      id: 0,
      login: '',
      name: '',
      avatar_url: '',
      html_url: '',
      bio: '',
      followers: 0,
      following: 0,
      public_repos: 0
    },
    error: false,
    loading: false,
  },

  reducers: {
    load: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  }
});

export const user = userSlice.reducer;

export const { load } = userSlice.actions;
