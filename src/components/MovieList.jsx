import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title} // Title from OMDB API
            image={movie.Poster} // Poster from OMDB API
            description={movie.Type} // Can use 'Type' or other properties as description
          />
        ))}
      </div>
    </div>
  );
};
export default MovieList;