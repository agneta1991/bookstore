import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: '',
  error: null,
};

const baseBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';
export const appId = 'kLivYWfk0nGVQW8K0TO2';

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(`${baseBooksURL}/apps/${appId}`);
    console.log(response.data);
    return response.data;
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async ({ book }) => {
    await axios.post(`${baseBooksURL}/apps/${appId}/books`, book);
    return book;
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBook',
  async ({ itemId }) => {
    await axios.delete(`${baseBooksURL}/apps/${appId}/books/${itemId}`);
    return itemId;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((keyOfActionPayload) => {
            books.push({
              item_id: keyOfActionPayload,
              ...action.payload[keyOfActionPayload][0],
            });
          });
          state.books = books;
          if (state.books.length === 0) state.error = 'No data was found';
        } else {
          state.error = 'No result';
        }
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'Book has been removed!';
        state.books = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.status = 'Loading...';
      });
  },
});

export default booksSlice.reducer;
