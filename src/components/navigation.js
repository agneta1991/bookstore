import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <nav style={{ width: '100%', border: '1px solid black' }}>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link className="links" to="/books">
              {' '}
              BOOKS
              {' '}
            </Link>
          </li>
          <li>
            <Link className="links" to="/categories">
              {' '}
              CATEGORIES
              {' '}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
