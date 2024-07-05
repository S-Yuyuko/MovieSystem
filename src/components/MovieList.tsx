import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { getIsDarkTheme } from '../theme/ThemeManager'; // Import the global theme manager
import { lightStyles, darkStyles } from './styles/MovieListStyles'; // Import the separated styles

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface MovieListProps {
  title: string;
  movies: Movie[];
  onMoviePress: (id: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ title, movies, onMoviePress }) => {
  const isDarkTheme = getIsDarkTheme(); // Get the current theme state
  const styles = isDarkTheme ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onMoviePress(item.id)}>
            <View style={styles.movieContainer}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }} style={styles.image} />
              <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieList;
