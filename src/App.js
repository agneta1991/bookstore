import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation';
import BookState from './components/bookstate';
import BookList from './components/booklist';
// import NewBook from './components/newbook';

function App() {
  const addBook = (title) => {
    console.log(`Adding book: ${title}`);
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
      {/* <NewBook /> */}
    </>
  );
}

export default App;
