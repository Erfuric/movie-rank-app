// Copy/paste code from tutorial, to replace later

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
// Login checking
import { AuthContext } from '../components/AuthContext';

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        {isLoggedIn && (
          <>
            <li><NavLink exact to="/create-list" activeClassName="active">Create List</NavLink></li>
            <li><NavLink exact to="/search-user" activeClassName="active">Search User</NavLink></li>
            <li><NavLink exact to="/user" activeClassName="active">Profile</NavLink></li>
            <li><NavLink exact to="/view-list" activeClassName="active">My Lists</NavLink></li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
