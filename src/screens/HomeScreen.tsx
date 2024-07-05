import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import MovieSlider from '../components/MovieSlider';
import MovieList from '../components/MovieList';
import Menu from '../components/Menu';
import useMovies from '../hooks/useMovies';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';
import { lightStyles, darkStyles } from './styles/HomeScreenStyles'; // Import the styles

const HomeScreen: React.FC<{ onNavigate: (screen: string, params?: any) => void }> = ({ onNavigate }) => {
  const {
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
  } = useMovies(onNavigate); // Pass onNavigate to the hook

  const styles = isDarkTheme ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <View style={styles.container}>
      <Menu onGenreSelect={handleGenreSelect} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={styles.activityIndicator.color} />
        </View>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          <MovieSlider onMoviePress={handleMoviePress} />
          <MovieList title="Now Showing" movies={nowShowing} onMoviePress={handleMoviePress} />
          <MovieList title="Coming Soon" movies={comingSoon} onMoviePress={handleMoviePress} />
          <MovieList title="Top Rated" movies={topRated} onMoviePress={handleMoviePress} />
        </ScrollView>
      )}
      {selectedMovieId !== null && (
        <MovieDetailsDrawer
          id={selectedMovieId}
          onClose={closeDrawer}
          onOpenWebsite={handleOpenWebsite}
        />
      )}
    </View>
  );
};

export default HomeScreen;
