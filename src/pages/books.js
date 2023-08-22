import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from '../components/theform';
import { remove } from '../redux/books/booksSlice';

const Home = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove({ id }));
  };

  return (
    <>
      <section className="homePageDiv">
        <div className="bookListDiv">
          <h1>Books</h1>
          <ul>
            {books.map((book) => (
              <li key={book.itemId} className="individualBookLiItem">
                <div className="bookInfo">
                  <h2>{book.title}</h2>
                  <h3>{book.author}</h3>
                  <h4>{book.category}</h4>
                </div>
                <button
                  className="delete"
                  type="button"
                  onClick={() => handleDelete(book.itemId)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BookForm />
    </>
  );
};

export default Home;
