// @flow
import React, { Fragment } from 'react';
import {
  Box, Image, Heading, Divider, Text,
} from 'gestalt';

import type { MovieType } from './types';

const Description = ({ movie }: {movie: MovieType}) => (
  <Box display="flex" direction="column" maxWidth={400}>
    <Box>
      <Heading size="sm">
        {movie.title}
      </Heading>
    </Box>
    <Box>
      <Text>
        {movie.overview}
      </Text>
    </Box>
  </Box>
);

const Poster = ({ movie }: {movie: MovieType}) => (
  movie.poster_path
    ? (
      <Box display="flex" width={200} height={200}>
        <Image
          naturalWidth={1}
          naturalHeight={1}
          fit="contain"
          alt={`${movie.title} poster`}
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
      </Box>
    ) : null
);

const Movie = (movie, i) => (
  <Fragment key={i}>
    <Box display="flex" padding={2} direction="row">
      <Poster movie={movie} />
      <Description movie={movie} />
    </Box>
    <Divider />
  </Fragment>
);

export default ({ movies }: { movies: MovieType[]}) => (
  <Box>
    {movies.map(Movie)}
  </Box>
);
