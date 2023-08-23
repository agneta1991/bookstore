import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAppURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const baseBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/:app_id/books';

export const fetchAppId = async () => {
  try {
    const response = await axios.post(baseAppURL);
    const appId = response.data;
    console.log('id is', appId);
    return appId;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (appId) => {
    const response = await axios.get(baseBooksURL.replace(':app_id', appId));
    console.log(response);
    console.log(response.data);
    return response.data;
  },
);

export const addAndFetch = createAsyncThunk(
  'books/addAndFetch',
  async ({ newBook, appId }) => {
    await axios.post(baseBooksURL.replace(':app_id', appId), newBook);
    const fetchResponse = await axios.get(
      baseBooksURL.replace(':app_id', appId),
    );
    return fetchResponse.data;
  },
);

export const removeAndFetch = createAsyncThunk(
  'books/removeAndFetch',
  async ({ bookId, appId }) => {
    await axios.delete(`${baseBooksURL.replace(':app_id', appId)}/${bookId}`);
    const fetchResponse = await axios.get(
      baseBooksURL.replace(':app_id', appId),
    );
    return fetchResponse.data;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [],
    status: 'idle',
  },
  reducers: {},
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
      })
      .addCase(addAndFetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(removeAndFetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      });
  },
});
