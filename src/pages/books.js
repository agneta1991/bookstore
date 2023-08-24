import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/booklist';
import BookForm from '../components/theform';
import { fetchBooksAsync, appId } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooksAsync(appId));
  }, []);

  return (
    <section className="homePageDiv">
      <div className="bookListDiv">
        <ul>
          <p>{status}</p>
          {books.map((book) => (
            <li className="individualBookLiItem" key={uuidv4()}>
              {' '}
              <BookList book={book} />
            </li>
          ))}
          <BookForm />
        </ul>
      </div>
    </section>
  );
};

export default Home;
