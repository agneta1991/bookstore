import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync, appId } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Under the construction',
    };
    await dispatch(addBookAsync({ appId, book: newBook }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
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
      <button className="addBook" type="button" onClick={handleAddBook}>
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
