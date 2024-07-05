import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import useGenreMovies from '../hooks/useGenreMovies';
import BackArrow from '../components/icons/BackArrow';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';
import { lightStyles, darkStyles } from './styles/GenreMoviesStyles'; // Import the styles

const GenreMoviesScreen: React.FC<{ genreId: number; genreName: string; onNavigate: (screen: string, params?: any) => void }> = ({ genreId, genreName, onNavigate }) => {
  const { movies, loading, selectedMovieId, handleMoviePress, closeDrawer, isDarkTheme } = useGenreMovies(genreId);
  const styles = isDarkTheme ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{genreName} Movies</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
          <BackArrow size={24} color={isDarkTheme ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={styles.activityIndicator.color} />
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

export default GenreMoviesScreen;
