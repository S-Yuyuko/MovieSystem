import { useState, useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import useGenres from '../../hooks/useGenres';
import { getIsDarkTheme, addThemeListener, removeThemeListener } from '../../theme/ThemeManager'; // Import the theme manager

const { width } = Dimensions.get('window');

// Hook to manage the theme state and listeners
const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme());

  useEffect(() => {
    const handleThemeChange = (theme: boolean) => setIsDarkTheme(theme);
    addThemeListener(handleThemeChange);
    return () => removeThemeListener(handleThemeChange);
  }, []);

  return isDarkTheme;
};

// Hook to manage the menu state and animation logic
export const useMenu = (onGenreSelect: (genreId: number, genreName: string) => void) => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const { genres } = useGenres();
  const isDarkTheme = useTheme(); // Get the current theme state
  const styles = isDarkTheme ? 'dark' : 'light'; // Return the theme string for conditional styles

  const handleGenrePress = (id: number, name: string) => {
    onGenreSelect(id, name);
    closeMenu();
  };

  const openMenu = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return {
    modalVisible,
    slideAnim,
    genres,
    isDarkTheme,
    styles,
    openMenu,
    closeMenu,
    handleGenrePress,
  };
};
