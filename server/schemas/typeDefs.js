const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    movies: [Movie]!
  }

  type Movie {
    _id: ID!
    title: String!
    description: String!
    rating: Float!
    year: Int!
    genre: String!
    director: String!
    actors: [String]!
    list: [String]!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input MovieInput {
    title: String!
    description: String!
    rating: Float!
    year: Int!
    genre: String!
    director: String!
    actors: [String]!
  }

  type Query {
    getUserById(id: ID!): User
    getUserByUsername(username: String!): User
    getAllMovies: [Movie]
    getMoviesByTitle(title: String!): [Movie]
    getMoviesByGenre(genre: String!): [Movie]
    getMoviesByDirector(director: String!): [Movie]
  }

  type Mutation {
    addUser(userInput: UserInput!): User!
    updateUser(id: ID!, userInput: UserInput!): User!
    deleteUser(id: ID!): User!
    addMovie(movieInput: MovieInput!): Movie!
    updateMovie(id: ID!, movieInput: MovieInput!): Movie!
    deleteMovie(id: ID!): Movie!
  }
`;

module.exports = typeDefs;