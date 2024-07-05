import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import useGenreMovies from '../hooks/useGenreMovies';
import BackArrow from '../components/BackArrow';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';

const GenreMoviesScreen: React.FC<{ genreId: number; genreName: string; onNavigate: (screen: string, params?: any) => void }> = ({ genreId, genreName, onNavigate }) => {
  const movies = useGenreMovies(genreId);
  const isLoading = !movies.length;
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleMoviePress = (id: number) => {
    setSelectedMovieId(id);
  };

  const closeDrawer = () => {
    setSelectedMovieId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{genreName} Movies</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
          <BackArrow size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1E90FF" />
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMoviePress(item.id)}>
              <View style={styles.movieItem}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }}
                  style={styles.movieImage}
                />
                <View style={styles.movieDetails}>
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieOverview} numberOfLines={3}>{item.overview}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      {selectedMovieId !== null && (
        <MovieDetailsDrawer
          id={selectedMovieId}
          onClose={closeDrawer}
          onOpenWebsite={(url: string) => onNavigate('WebView', { url })}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieDetails: {
    flex: 1,
    padding: 10,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  movieOverview: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default GenreMoviesScreen;
