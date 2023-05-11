import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
query {
  movies {
    id
    title
    year
    poster
  }
}
`;