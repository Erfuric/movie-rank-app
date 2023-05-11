const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    poster: String!
    rank: Int!
  }

  type Query {
    movies: [Movie!]!
  }
`;

module.exports = typeDefs;
