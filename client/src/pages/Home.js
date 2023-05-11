import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Movie List!</h1>
      <p>Please log in or register to start creating and managing your movie lists.</p>
      <div>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    </div>
  );
}

export default Home;
