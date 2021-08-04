const { gql } = require("apollo-server-express");

// have set login to be by email, we can change if we want
const typeDefs = gql`


    type User {
        _id: ID
        username: String
        email: String
        games: [Game]
    }

    type Game {
        _id: ID
        location: String
        hours: Float
        small_blind: Float
        big_blind: Float
        buy_in: Int
        cash_out: Float
        date: String
        username: String
        result: Float
        cash_per_hour: Float
        bb_per_hour: Float
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
        addGame(userId: ID!, location: String!, hours: Int!, small_blind: Float!, big_blind: Float!, buy_in: Int!, cash_out: Float!, date: String!): User
    }
`;

module.exports = typeDefs;
