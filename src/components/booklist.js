import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ IndividualBook }) => (
  <div className="book-list">
    {IndividualBook.map((book) => (
      <IndividualBook
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        selectedGenre={book.selectedGenre}
      />
    ))}
  </div>
);

BookList.propTypes = {
  IndividualBook: PropTypes.func.isRequired,
};

export default BookList;
