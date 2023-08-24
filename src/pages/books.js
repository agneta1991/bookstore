import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/booklist';
import BookForm from '../components/theform';
import {
  addAndFetch,
  removeAndFetch,
  fetchBooks,
  // fetchAppId,
} from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  // const appId = useSelector((state) => state.books.appId);
  const books = useSelector((state) => state.books.value);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // useEffect(() => {
  //   if (appId) {
  //     dispatch(fetchBooks(appId));
  //   }
  // }, [dispatch, appId]);

  const handleDelete = (id) => {
    // if (appId) {
    //   dispatch(removeAndFetch({ bookId: id, appId }));
    // }
    console.log('delete action', id, removeAndFetch);
  };

  const handleSubmit = (newBook) => {
    // if (appId) {
    // dispatch(addAndFetch({ newBook, appId }));
    console.log('add book action', addAndFetch, newBook);
    // }
  };

  return (
    <div className="homePageDiv">
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
