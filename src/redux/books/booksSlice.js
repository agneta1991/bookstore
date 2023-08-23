import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseAppURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const baseBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/:app_id/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (appId) => {
    const response = await axios.get(baseBooksURL.replace(':app_id', appId));
    return response.data;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [],
    status: 'idle',
  },
  reducers: {
    add: (state, action) => {
      const { title, author } = action.payload;
      state.value.push({ title, author });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter((book) => book.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { add, remove } = booksSlice.actions;
