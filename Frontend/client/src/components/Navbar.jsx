import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
