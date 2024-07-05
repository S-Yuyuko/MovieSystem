import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import MovieSlider from '../components/MovieSlider';
import MovieList from '../components/MovieList';
import Menu from '../components/Menu';
import useMovies from '../hooks/useMovies';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';

const HomeScreen: React.FC<{ onNavigate: (screen: string, params?: any) => void }> = ({ onNavigate }) => {
  const { nowShowing, comingSoon, topRated, loading } = useMovies();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

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

  return (
    <View style={styles.container}>
      <Menu onGenreSelect={handleGenreSelect} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1E90FF" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
