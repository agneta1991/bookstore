// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const BookForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, author });
//     setTitle('');
//     setAuthor('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>ADD NEW BOOK</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Author"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//       />
//       <button type="submit">ADD BOOK</button>
//     </form>
//   );
// };

// BookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default BookForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync, appId } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    console.log('Adding book...');
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    console.log('New Book:', newBook);
    await dispatch(addBookAsync({ appId, book: newBook }));
    console.log('Book added successfully');
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
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
      <button type="button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
}

export default BookForm;
