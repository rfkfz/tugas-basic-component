import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComments, faInfoCircle, faCaretRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCube, faUser } from '@fortawesome/free-solid-svg-icons';
import Products from './pages/products';
import Users from './pages/users';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-icons">
          <li className="header-icon">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="header-icon">
            <FontAwesomeIcon icon={faComments} />
          </li>
          <li className="header-icon">
            <FontAwesomeIcon icon={faInfoCircle} />
          </li>
          <li className="header-icon">|</li>
          <li className="header-icon">
            <FontAwesomeIcon icon={faCaretRight} />
          </li>
          <li className="header-icon">Acne</li>
          <li className="header-icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h6 className='pagesH6'>PAGES</h6>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCube} className="sidebar-icon-cube" />
          <Link to="/products">Products</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="sidebar-icon-user" />
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </aside>
  );
};


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
