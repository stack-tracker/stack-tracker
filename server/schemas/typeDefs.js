const { gql } = require("apollo-server-express");

// have set login to be by email, we can change if we want
const typeDefs = gql`
<<<<<<< HEAD
  scalar Date

  type User {
    _id: ID
    username: String
    email: String
  }

  type Game {
    _id: ID
    location: String
    hours: Int
    small_blind: Int
    big_blind: Int
    buy_in: Int
    cash_out: Int
    date: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    games: [Game]
    game: Game
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addGame(gameId: ID): User
  }
=======


    type User {
        _id: ID
        username: String
        email: String
        games: [Game]
    }

    type Game {
        _id: ID
        location: String
        hours: Int
        small_blind: Int
        big_blind: Int
        buy_in: Int
        cash_out: Int
        date: String
        username: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        games: [Game]
        game: Game
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        addGame(gameId: ID!): User
    }
>>>>>>> 0c9a2cd64c2a80b46a5a66e6b061a81cc93046cb
`;

module.exports = typeDefs;
