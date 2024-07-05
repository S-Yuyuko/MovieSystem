import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useMovies = () => {
  const [nowShowing, setNowShowing] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return { nowShowing, comingSoon, topRated, loading };
};

export default useMovies;
