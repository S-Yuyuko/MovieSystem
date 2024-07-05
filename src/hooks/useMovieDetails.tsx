import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useMovieDetails = (id: number) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movie, loading };
};

export default useMovieDetails;
