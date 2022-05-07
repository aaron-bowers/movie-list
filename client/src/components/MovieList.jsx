import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = ({list}) => (
  <div className="movie-list">
    {list.map((movie, index) => (
      <MovieListEntry
        key={index}
        movie={movie}
      />
    ))}
  </div>
)

export default MovieList;