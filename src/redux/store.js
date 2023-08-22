import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories/categoriesSlice';
import booksSliceReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksSliceReducer,
    category: categoriesSlice,
  },
});

export default store;
