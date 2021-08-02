import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
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