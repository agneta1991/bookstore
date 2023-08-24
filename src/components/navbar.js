import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigationBar">
    <div className="nav-bar-right">
      <h1 className="logo">Bookstore CMS</h1>
      <ul id="nav-item">
        <li className="books-nav-bar">
          <Link to="/">BOOKS</Link>
        </li>
        <li>|</li>
        <li className="cat-nav-bar">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className="icon">
      <img
        src="https://img.icons8.com/ios-filled/0290ff/20/user.png"
        alt="user"
      />
    </div>
  </nav>
);

export default Navigation;
