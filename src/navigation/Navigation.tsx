import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';
import BottomNavigationBar from '../components/BottomNavigationBar';
import { useNavigationState } from './NavigationState';
import { lightStyles, darkStyles } from './NavigationStyles'; // Import the styles

const Navigation: React.FC = () => {
  const { currentScreen, selectedMovieId, isDark, handleNavigation, renderScreen } = useNavigationState();
  const styles = isDark ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        {renderScreen()}
        {selectedMovieId !== null && (
          <MovieDetailsDrawer
            id={selectedMovieId}
            onClose={() => handleNavigation(currentScreen)}
            onOpenWebsite={(url: string) => handleNavigation('WebView', { url })}
          />
        )}
      </View>
      <BottomNavigationBar navigate={handleNavigation} currentScreen={currentScreen} />
    </SafeAreaView>
  );
};

export default Navigation;
