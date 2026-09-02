import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger" href="#">🛒 ShopZone</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-danger btn-sm">🛒 Cart ({cartCount})</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;