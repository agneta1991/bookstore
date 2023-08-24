import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseAppURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const baseBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/:app_id/books';

// export const fetchAppId = createAsyncThunk(
//   'books/fetchAppId',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post(baseAppURL);
//       const appId = response.data;
//       console.log('id is', appId);
//       return appId;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

const appId = 'kLivYWfk0nGVQW8K0TO2';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(baseBooksURL.replace(':app_id', appId));
    console.log('the response status is:', response);
    console.log('the response data is:', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

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

const initialState = {
  books: [],
  status: '',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(fetchAppId.fulfilled, (state, action) => {
      //     state.appId = action.payload;
      //   })
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
