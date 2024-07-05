import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return { genres };
};

export default useGenres;
