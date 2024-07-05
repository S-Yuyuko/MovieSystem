import { useState, useEffect } from 'react';
import axios from 'axios';
import { getIsDarkTheme } from '../theme/ThemeManager'; // Import the global theme manager

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useMovies = (onNavigate: (screen: string, params?: any) => void) => {
  const [nowShowing, setNowShowing] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const nowShowingRes1 = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`);
        const nowShowingRes2 = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=2`);

        const comingSoonRes1 = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`);
        const comingSoonRes2 = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=2`);

        const topRatedRes1 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`);
        const topRatedRes2 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=2`);

        setNowShowing([...nowShowingRes1.data.results, ...nowShowingRes2.data.results]);
        setComingSoon([...comingSoonRes1.data.results, ...comingSoonRes2.data.results]);
        setTopRated([...topRatedRes1.data.results, ...topRatedRes2.data.results]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMoviePress = (id: number) => {
    setSelectedMovieId(id);
  };

  const closeDrawer = () => {
    setSelectedMovieId(null);
  };

  const handleGenreSelect = (id: number, name: string) => {
    onNavigate('GenreMovies', { genreId: id, genreName: name });
  };

  const handleOpenWebsite = (url: string) => {
    onNavigate('WebView', { url });
  };

  return {
    nowShowing,
    comingSoon,
    topRated,
    loading,
    selectedMovieId,
    handleMoviePress,
    closeDrawer,
    handleGenreSelect,
    handleOpenWebsite,
    isDarkTheme,
  };
};

export default useMovies;
