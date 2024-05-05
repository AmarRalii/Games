import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sm.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-expand-sm navbar-expand-lg navbar-light  text-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src={logo} className="w-25" alt="Logo" /> GAME REVIEWS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">MMORPG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/shooter">SHOOTER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sailing">SAILING</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/permadeath">PERMADEATH</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/superhero">SUPERHERO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/pixel">PIXEL</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <a href="https://www.facebook.com/amar.elfarargy" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook p-2 cursor-pointer"></i>
            </a>
            <a href="https://www.linkedin.com/in/amar-reda-3b6020238/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin p-2 cursor-pointer"></i>
            </a>
            <a href="https://github.com/AmarRalii" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github p-2 cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
