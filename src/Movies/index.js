// @flow
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Spinner, Heading } from 'gestalt';

import type { OperationComponent, QueryProps } from 'react-apollo';

import Movies from './Movies';

import type { GetMovies, GetMoviesVariables } from './__generated__/GetMovies';

const MOVIES_QUERY = gql`
  query GetMovies($searchQuery: String!) {
    movies(query: $searchQuery) {
      title
      poster_path
      overview
    }
  }
`;

type Props = GetMovies & QueryProps;

const renderMovies: OperationComponent<GetMovies, GetMoviesVariables, Props> = graphql(MOVIES_QUERY, {
  options: ({ searchQuery }) => ({
    variables: { searchQuery },
  }),
});

export default renderMovies(({ data: { loading, movies, error } }) => {
  if (loading) return <Spinner show accessibilityLabel="Movies" />;
  if (error) return <Heading>ERROR :O</Heading>;
  if (!movies) return <Heading>No Movies :(</Heading>;

  return <Movies movies={movies} />;
});
