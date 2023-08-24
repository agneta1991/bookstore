import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { booksSlice } from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';

const middleware = [thunkMiddleware];

export default configureStore({
  reducer: {
    books: booksSlice.reducer,
    category: categoriesSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), ...middleware],
});
