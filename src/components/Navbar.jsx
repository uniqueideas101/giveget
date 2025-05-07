import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div><strong>GiveGet</strong></div>
    <div>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
