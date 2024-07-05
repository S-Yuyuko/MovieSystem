import React from 'react';
import { View, Image, TouchableOpacity, Animated, FlatList } from 'react-native';
import { MovieSliderUtils } from './utils/MovieSliderUtils'; // Import the custom hook

const MovieSlider: React.FC<{ onMoviePress: (id: number) => void }> = ({ onMoviePress }) => {
  const { nowShowing, flatListRef, scrollX, styles } = MovieSliderUtils();

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

export default MovieSlider;
