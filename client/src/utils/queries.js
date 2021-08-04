import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      games {
        _id
        location
        hours
        small_blind
        big_blind
        buy_in
        cash_out
        date
      }
    }
  }
`;

export const QUERY_USER_ID = gql`
  {
    user {
      _id
      username
    }
  }
`;