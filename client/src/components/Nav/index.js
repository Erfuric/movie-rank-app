import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/create-list">
                  Create List
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/search-user">
                  Search User
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/profile">
                  Profile
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/my-lists">
                  My Lists
                </Link>
              </li>
              <li className="mx-1">
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          );
        }
      }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Movie Ranking
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
