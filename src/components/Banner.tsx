import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface BannerProps {
  movie: {
    poster_path: string;
  };
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Banner;
