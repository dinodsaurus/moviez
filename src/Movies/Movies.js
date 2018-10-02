// @flow
import React, { Fragment } from 'react';
// import gql from 'graphql-tag';
// import { filter } from 'graphql-anywhere';
import {
  Box, Image, Heading, Divider, Text,
} from 'gestalt';

import type { GetMovies_movies as MovieType } from './__generated__/GetMovies';

export const Description = ({ movie }: {movie: MovieType}) => (
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

// Description.fragments = {
//   movie: gql`
//     fragment DescriptionDetails on Movie {
//       title
//       overview
//     }
//   `,
// };

export const Poster = ({ movie }: {movie: MovieType}) => (
  movie.poster_path
    ? (
      <Box display="flex" width={200} height={200}>
        <Image
          naturalWidth={1}
          naturalHeight={1}
          fit="contain"
          alt="Poster"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
      </Box>
    ) : null
);

export const Movie = (movie: MovieType, i: number) => (
  <Fragment key={i}>
    <Box display="flex" padding={2} direction="row">
      <Poster movie={movie} />
      <Description movie={movie} />
      {/* <Description movie={filter(Description.fragments.movie, movie)} /> */}
    </Box>
    <Divider />
  </Fragment>
);

export default ({ movies }: { movies: MovieType[]}) => (
  <Box>
    {movies.map(Movie)}
  </Box>
);
