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
        result
        cash_per_hour
        bb_per_hour
      }
    }
  }
`;

export const QUERY_USER_BASIC = gql`
  {
    user {
      _id
      username
    }
  }
`;