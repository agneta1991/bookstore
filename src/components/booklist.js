import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, appId } from '../redux/books/booksSlice';
import { CommentBtn, EditBtn } from './commentsRemoveEdit';
import Completion from './completion';
import ChapterDiv from './bookChapterStatus';

function BookList({ book }) {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync({ appId, itemId: book.item_id }));
  };

  return (
    <div className="individualBookLiItem">
      <div>
        <h4>{book.category}</h4>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <div className="buttonsDiv">
          <CommentBtn />
          <button className="delete" type="button" onClick={handleRemoveBook}>
            Delete
          </button>
          <EditBtn />
        </div>
      </div>
      <Completion />
      <ChapterDiv />
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
