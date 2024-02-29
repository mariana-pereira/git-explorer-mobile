import { createSlice } from '@reduxjs/toolkit';

const repositorySlice = createSlice({
  name: 'repositories',
  initialState: {
    repositories: [
      {
        id: '1',
        name: 'react'
      },
      {
        id: '2',
        name: 'angular'
      }
    ]
  },

  reducers: {
    load: (state, action) => {
      console.log(state, action);
    }
  }
});

export const repositories = repositorySlice.reducer;

export const { load } = repositorySlice.actions;
