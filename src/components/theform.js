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
    <>
      <hr />
      <form>
        <h2>Add New Book</h2>
        <div className="input-div">
          <input
            className="input-title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="addBook" type="button" onClick={handleAddBook}>
            ADD BOOK
          </button>
        </div>
      </form>
    </>
  );
}

export default BookForm;
