import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({list}) => (
  <ul>
    {list.map((movie, index) => (
      <MovieListEntry
        key={index}
        movie={movie}
      />
    ))}
  </ul>
)


export default MovieList;