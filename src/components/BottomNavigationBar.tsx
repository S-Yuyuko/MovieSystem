import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme, renderIcon } from './utils/BottomNavigationBarUtils'; // Import the combined utility
import { lightStyles, darkStyles } from './styles/BottomNavigationBarStyles'; // Import the styles

interface BottomNavigationBarProps {
  navigate: (screen: string) => void;
  currentScreen: string;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ navigate, currentScreen }) => {
  const isDarkTheme = useTheme(); // Use the theme utility to get the current theme state
  const styles = isDarkTheme ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Home')}>
        {renderIcon('Home', currentScreen, isDarkTheme, styles)}
        <Text style={[styles.navText, currentScreen === 'Home' && styles.activeNavText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Search')}>
        {renderIcon('Search', currentScreen, isDarkTheme, styles)}
        <Text style={[styles.navText, currentScreen === 'Search' && styles.activeNavText]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Settings')}>
        {renderIcon('Settings', currentScreen, isDarkTheme, styles)}
        <Text style={[styles.navText, currentScreen === 'Settings' && styles.activeNavText]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationBar;
