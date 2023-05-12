import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Nav from './components/Nav/';
import Login from './pages/Login';
import Signup from './pages/Signup';

import CreateList from './pages/CreateList';
import Home from './pages/Home';
import SearchUser from './pages/SearchUser';
import User from './pages/User';
import ViewList from './pages/ViewList';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Nav />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* <Route 
              path="/CreateList" 
              element={<CreateList />}
            />
            <Route 
              path="/SearchUser" 
              element={<SearchUser />}
            />
            <Route 
              path="User"
              element={<User />}
            />
            <Route 
              path="ViewList"
              element={<ViewList />}
            /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;