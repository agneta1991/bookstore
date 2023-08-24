import React from 'react';
import PropTypes from 'prop-types'; // Don't forget to import PropTypes
import { useDispatch } from 'react-redux';
import { removeBookAsync, appId } from '../redux/books/booksSlice';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync({ appId, item_id: book.item_id }));
  };

  return (
    <div className="bookListDiv">
      <h1>BOOKS</h1>
      <li>
        <p>
          Title:
          {book.title}
        </p>
        <p>
          Author:
          {book.author}
        </p>
        <p>
          Category:
          {book.category}
        </p>
        <button type="button" onClick={handleRemoveBook}>
          Remove Book
        </button>
      </li>
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
};

export default BookList;
