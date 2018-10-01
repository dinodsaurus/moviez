import gql from 'graphql-tag';
import { Description } from './Movies';

export default gql`
  query GetMovies($searchQuery: String!) {
    movies(query: $searchQuery) {
      ...DescriptionDetails
      poster_path
    }
  }
  ${Description.fragments.movie}
`;
