import { useRef, useEffect } from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import useMovies from '../../hooks/useMovies';
import { getIsDarkTheme } from '../../theme/ThemeManager';
import { lightStyles, darkStyles } from '../styles/MovieSliderStyles'; // Import the styles

const { width, height } = Dimensions.get('window');

export const MovieSliderUtils = () => {
  const { nowShowing } = useMovies();
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);
  const isDarkTheme = getIsDarkTheme();
  const styles = isDarkTheme ? darkStyles : lightStyles;

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

  return { nowShowing, flatListRef, scrollX, styles };
};
