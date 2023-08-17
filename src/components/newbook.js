import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('options');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && selectedGenre !== 'options' && author) {
      const newBook = { title, genre: selectedGenre, author };
      onAddBook(newBook);
      setTitle('');
      setSelectedGenre('options');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="options">Choose one of the options</option>
        <option value="fiction">Science Fiction and Fantasy</option>
        <option value="romance">Romance</option>
        <option value="thriller">Mystery and Thriller</option>
        <option value="developement">Self-Help and Personal Development</option>
        <option value="YO">Young Adult (YA)</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
