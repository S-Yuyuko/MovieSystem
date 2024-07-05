import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Animated, Dimensions } from 'react-native';
import { getIsDarkTheme } from '../theme/ThemeManager'; // Import the global theme manager

const API_KEY = '5bb5cc709b309e9c01bf1e4590cc80b5';

const screenHeight = Dimensions.get('window').height;

const useSearchMovies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [searchActivated, setSearchActivated] = useState(false);
  const isDarkTheme = getIsDarkTheme(); // Get the current theme state
  const animatedValue = useRef(new Animated.Value(0)).current;

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
    setSearchActivated(false);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSearchPress = () => {
    if (query.trim() === '') {
      return; // If query is null or empty, do not proceed with the search
    }
    handleSearch();
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setSearchActivated(true);
  };

  const handleClearPress = () => {
    clearResults();
  };

  const handleMoviePress = (id: number) => {
    setSelectedMovieId(id);
  };

  const closeDrawer = () => {
    setSelectedMovieId(null);
  };

  const containerTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight / 2 - 30, 10],
  });

  return {
    query,
    setQuery,
    results,
    loading,
    searching,
    handleSearch,
    clearResults,
    errorMessage,
    selectedMovieId,
    handleMoviePress,
    closeDrawer,
    searchActivated,
    handleSearchPress,
    handleClearPress,
    animatedValue,
    containerTranslateY,
    isDarkTheme,
  };
};

export default useSearchMovies;
