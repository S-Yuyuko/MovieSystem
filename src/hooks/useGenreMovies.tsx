import { useState, useEffect } from 'react';
import axios from 'axios';
import { getIsDarkTheme } from '../theme/ThemeManager';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useGenreMovies = (genreId: number) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme());

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genreId]);

  const handleMoviePress = (id: number) => {
    setSelectedMovieId(id);
  };

  const closeDrawer = () => {
    setSelectedMovieId(null);
  };

  return {
    movies,
    loading,
    selectedMovieId,
    handleMoviePress,
    closeDrawer,
    isDarkTheme,
  };
};

export default useGenreMovies;
