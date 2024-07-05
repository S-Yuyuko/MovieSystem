import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const useSearchMovies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    setSearching(true);
    setErrorMessage('');
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      if (response.data.results.length === 0) {
        setErrorMessage('No results found. Please try a different query.');
      }
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setSearching(false);
    }
  };

  const clearResults = () => {
    setQuery('');
    setResults([]);
    setSearching(false);
    setErrorMessage('');
  };

  return {
    query,
    setQuery,
    results,
    loading,
    searching,
    handleSearch,
    clearResults,
    errorMessage,
  };
};

export default useSearchMovies;
