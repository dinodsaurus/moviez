// @flow
import React from 'react';
import { Query } from 'react-apollo';
import { Spinner, Heading } from 'gestalt';

import Movies from './Movies';
import MOVIES_QUERY from './MoviesQuerie';

import type { GetMoviesVariables } from './__generated__/GetMovies';


export default ({ searchQuery }: GetMoviesVariables) => (
  <Query query={MOVIES_QUERY} variables={{ searchQuery }}>
    {({ loading, error, data: { movies } }) => {
      if (loading) return <Spinner show accessibilityLabel="Movies loader" />;
      if (error) return <Heading>ERROR :O</Heading>;
      if (!movies) return <Heading>No Movies :(</Heading>;

      return <Movies movies={movies} />;
    }}
  </Query>
);
