import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar';
import Categories from './pages/categories';
import './App.css';
import './components/NavigationBar.css';
import './components/HomePage.css';
import './components/individualBook.css';
import BooksPage from './pages/books';

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
