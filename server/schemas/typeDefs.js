const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    movies: [Movie]
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
    user: User!
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

  type Auth {
    user: User!
    token: String!
  }

  type Query {
    movies: [Movie]!
    movie(_id: ID!): Movie
    users: [User]!
    user(_id: ID!): User
    me: User!
  }

  type Mutation {
    addMovie(movieInput: MovieInput!): Movie!
    updateMovie(_id: ID!, movieInput: MovieInput!): Movie!
    deleteMovie(_id: ID!): Boolean!
    addUser(userInput: UserInput!): Auth!
    login(email: String!, password: String!): Auth!
  }
`;

module.exports = typeDefs;
