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
// }

export const loadUser = createAsyncThunk(
  'user/load',
  async () => {
    const response = await api.get('users/mariana-pereira');

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
    load: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state, action) => {
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
