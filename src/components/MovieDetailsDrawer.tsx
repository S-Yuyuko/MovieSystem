import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import useMovieDetails from '../hooks/useMovieDetails';

const { height, width } = Dimensions.get('window');

const MovieDetailsDrawer: React.FC<{ id: number; onClose: () => void; onOpenWebsite: (url: string) => void }> = ({ id, onClose, onOpenWebsite }) => {
  const { movie, loading } = useMovieDetails(id);
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  const handleOpenWebsite = () => {
    if (movie && movie.homepage) {
      onOpenWebsite(movie.homepage);
    }
  };

  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
        </View>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={styles.image} />
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
          <TouchableOpacity onPress={handleOpenWebsite}>
            <Text style={styles.link}>Visit Official Website</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.8,
    backgroundColor: '#121212',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 10,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
    width: '100%',
  },
  lineWrapper: {
    width: '100%',
    height: 40, // Increased touchable area height
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.6, // Adjust this value to fit the aspect ratio
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default MovieDetailsDrawer;
