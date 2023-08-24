import React from 'react';
import PropTypes from 'prop-types'; // Don't forget to import PropTypes
import { useDispatch } from 'react-redux';
import { removeBookAsync, appId } from '../redux/books/booksSlice';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync({ appId, itemId: book.item_id }));
  };

  return (
    <div className="bookInfo">
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
      <button className="delete" type="button" onClick={handleRemoveBook}>
        Delete Book
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
};

export default BookList;
