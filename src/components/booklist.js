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
        <p className="category-p">{book.category}</p>
        <p className="title-p">{book.title}</p>
        <p className="author-p">{book.author}</p>
        <div className="buttonsDiv">
          <CommentBtn />
          <div className="vertical-line" />
          <button className="delete" type="button" onClick={handleRemoveBook}>
            Delete
          </button>
          <div className="vertical-line" />
          <EditBtn />
        </div>
      </div>
      <Completion />
      <div className="vertical-line" />
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
