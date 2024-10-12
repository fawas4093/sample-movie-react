import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import axios from 'axios';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/?s=avengers&apikey=851263c4');
        setMovies(response.data.Search); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MovieList movies={movies} /> {/* Passing movies as an array */}
    </div>
  );
};

export default MoviePage;


