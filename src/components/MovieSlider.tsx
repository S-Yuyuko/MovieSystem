import React, { useRef, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import useMovies from '../hooks/useMovies';

const { width, height } = Dimensions.get('window');

const MovieSlider: React.FC<{ onMoviePress: (id: number) => void }> = ({ onMoviePress }) => {
  const { nowShowing } = useMovies();
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex.current < nowShowing.length - 1) {
        currentIndex.current += 1;
      } else {
        currentIndex.current = 0;
      }
      flatListRef.current?.scrollToIndex({ index: currentIndex.current, animated: true });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nowShowing.length]);

  return (
    <FlatList
      ref={flatListRef}
      data={nowShowing}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.slide}>
          <TouchableOpacity onPress={() => onMoviePress(item.id)}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      )}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.6, // Adjust height as needed
  },
  image: {
    width: width,
    height: '100%',
  },
});

export default MovieSlider;
