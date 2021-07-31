const { gql } = require('apollo-server-express');

// have set login to be by email, we can change if we want
const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
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
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;