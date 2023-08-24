import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar';
import './App.css';
import './components/NavigationBar.css';
import './components/HomePage.css';
import './components/individualBook.css';
import './components/ProgressCircle.css';
import './components/Form.css';
import './components/Chapter.css';
import BooksPage from './pages/books';
import Categories from './pages/categoriesPage';

function App() {
  return (
    <>
      <Navigation />
      <div className="whole-page">
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
