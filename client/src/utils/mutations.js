import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
      $username: String!
      $email: String! 
      $password: String!
    ) {
      addUser(
        username: $username
        email: $email
        password: $password
      ) {
          token
          user {
            _id
        }
      }
    }
`;

export const ADD_GAME = gql`
  mutation addGame(
    $userId: ID!
    $location: String!
    $hours: Float!
    $small_blind: Float!
    $big_blind: Float!
    $buy_in: Int!
    $cash_out: Float!
    $date: String!
    $username: String!
  ) {
    addGame(
      userId: $userId
      location: $location
      hours: $hours
      small_blind: $small_blind
      big_blind: $big_blind
      buy_in: $buy_in
      cash_out: $cash_out
      date: $date
      username: $username
    ) {
      user {
        _id
        games {
          location
        }
      }
    }
  }
`;