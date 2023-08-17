import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation';
import BookState from './components/bookstate';
import BookList from './components/booklist';
import BookForm from './components/newbook';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/books" element={<BookState addBook={addBook} />} />
        </Routes>
        <Routes>
          <Route path="/categories" element={<BookList />} />
        </Routes>
      </div>
      <BookForm onAddBook={addBook} />
    </>
  );
}

export default App;
