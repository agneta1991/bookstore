
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, appId } from '../redux/books/booksSlice';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync({ appId, itemId: book.item_id }));
  };

  return (
    <div className="individualBookLiItem">
      <div>
        <h2>
          Title:
          {book.title}
        </h2>
        <h3>
          Author:
          {book.author}
        </h3>
        <h4>
          Category:
          {book.category}
        </h4>
      </div>
      <button className="delete" type="button" onClick={handleRemoveBook}>
        Delete
      </button>
    </div>
  );
}

BookList.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
=======
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove({ id }));
  };
  return (
    <section className="homePageDiv">
      <div className="bookListDiv">
        <h1 className="title">Books</h1>
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
  );
};
export default BookList;
