import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  movieContainer: {
    marginRight: 10,
    width: 100,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default MovieList;
