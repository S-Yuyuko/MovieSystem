import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useGenreMovies = (genreId: number) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [genreId]);

  return movies;
};

export default useGenreMovies;
