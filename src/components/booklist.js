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
};

export default BookList;
