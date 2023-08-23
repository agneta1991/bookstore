import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/booklist';
import BookForm from '../components/theform';
import {
  addAndFetch,
  removeAndFetch,
  fetchBooks,
} from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.value);
  const fetchedAppId = useSelector((state) => state.books.appId);
  console.log(books, fetchedAppId);

  useEffect(() => {
    if (fetchedAppId) {
      dispatch(fetchBooks(fetchedAppId));
    }
  }, [dispatch, fetchedAppId]);

  const handleDelete = (id) => {
    if (fetchedAppId) {
      dispatch(removeAndFetch({ bookId: id, appId: fetchedAppId }));
    }
  };

  const handleSubmit = (newBook) => {
    if (fetchedAppId) {
      dispatch(addAndFetch({ newBook, appId: fetchedAppId }));
    }
  };

  return (
    <div className="homePageDiv">
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
