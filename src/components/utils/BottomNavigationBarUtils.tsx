import { useState, useEffect } from 'react';
import { View } from 'react-native';
import HomeIcon from '../icons/HomeIcon';
import SearchIcon from '../icons/SearchIcon';
import SettingsIcon from '../icons/SettingsIcon';
import { getIsDarkTheme, addThemeListener, removeThemeListener } from '../../theme/ThemeManager';

// Hook to manage the theme state and listeners
export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme());

  useEffect(() => {
    const handleThemeChange = (theme: boolean) => setIsDarkTheme(theme);
    addThemeListener(handleThemeChange);
    return () => removeThemeListener(handleThemeChange);
  }, []);

  return isDarkTheme;
};

// Function to render icons based on the screen and theme
export const renderIcon = (screen: string, currentScreen: string, isDarkTheme: boolean, styles: any) => {
  let icon;
  const color = currentScreen === screen ? (isDarkTheme ? 'white' : 'black') : '#aaa';
  switch (screen) {
    case 'Home':
      icon = <HomeIcon color={color} />;
      break;
    case 'Search':
      icon = <SearchIcon color={color} />;
      break;
    case 'Settings':
      icon = <SettingsIcon color={color} />;
      break;
  }
  return <View style={[styles.icon, { opacity: currentScreen === screen ? 1 : 0.5 }]}>{icon}</View>;
};
