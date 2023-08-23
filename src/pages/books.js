import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/booklist';
import BookForm from '../components/theform';
import { add, remove } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.value);

  const handleDelete = (id) => {
    dispatch(remove({ id }));
  };

  const handleSubmit = (newBook) => {
    dispatch(add(newBook));
  };

  return (
    <div className="homePageDiv">
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
