// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">The Word</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Navbar;
