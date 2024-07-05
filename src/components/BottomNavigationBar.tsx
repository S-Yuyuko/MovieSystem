import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface BottomNavigationBarProps {
  navigate: (screen: string) => void;
  currentScreen: string;
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ navigate, currentScreen }) => {
  const renderIcon = (screen: string) => {
    let icon;
    switch (screen) {
      case 'Home':
        icon = (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20Z" />
            <Path d="M9 22V12H15V22" />
          </Svg>
        );
        break;
      case 'Search':
        icon = (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M21 21L16.65 16.65" />
            <Path d="M11 19A8 8 0 1 1 19 11A8 8 0 0 1 11 19Z" />
          </Svg>
        );
        break;
      case 'Settings':
        icon = (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12 8V4M12 16V20M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4 12H8M16 12H20M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
            <Path d="M12 15A3 3 0 1 1 15 12A3 3 0 0 1 12 15Z" />
          </Svg>
        );
        break;
    }
    return <View style={[styles.icon, { opacity: currentScreen === screen ? 1 : 0.5 }]}>{icon}</View>;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Home')}>
        {renderIcon('Home')}
        <Text style={[styles.navText, currentScreen === 'Home' && styles.activeNavText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Search')}>
        {renderIcon('Search')}
        <Text style={[styles.navText, currentScreen === 'Search' && styles.activeNavText]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigate('Settings')}>
        {renderIcon('Settings')}
        <Text style={[styles.navText, currentScreen === 'Settings' && styles.activeNavText]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10, // Ensure it stays above other components
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'gray',
    fontSize: 12,
  },
  activeNavText: {
    color: 'tomato',
  },
  icon: {
    marginBottom: 2,
  },
});

export default BottomNavigationBar;
