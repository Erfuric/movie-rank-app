// Copy/paste code from tutorial, to replace later

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/create-list" activeClassName="active">Create List</NavLink></li>
        <li><NavLink exact to="/search-user" activeClassName="active">Search User</NavLink></li>
        <li><NavLink exact to="/user" activeClassName="active">Profile</NavLink></li>
        <li><NavLink exact to="/view-list" activeClassName="active">My Lists</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
