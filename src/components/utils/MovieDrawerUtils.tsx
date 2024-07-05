import { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import useMovieDetails from '../../hooks/useMovieDetails';
import { getIsDarkTheme } from '../../theme/ThemeManager';

const { height } = Dimensions.get('window');

export const MovieDrawerUtils = (id: number, onClose: () => void, onOpenWebsite: (url: string) => void) => {
  const { movie, loading } = useMovieDetails(id);
  const slideAnim = useRef(new Animated.Value(height)).current;
  const isDarkTheme = getIsDarkTheme();
  const styles = isDarkTheme ? 'dark' : 'light';

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

  return {
    movie,
    loading,
    slideAnim,
    isDarkTheme,
    styles,
    handleClose,
    handleOpenWebsite,
  };
};
