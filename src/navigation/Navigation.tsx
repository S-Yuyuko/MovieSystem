import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WebViewScreen from '../screens/WebViewScreen';
import GenreMoviesScreen from '../screens/GenreMoviesScreen';
import BottomNavigationBar from '../components/BottomNavigationBar';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';

const Navigation: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);
  const [genreDetails, setGenreDetails] = useState<{ genreId: number; genreName: string } | null>(null);

  const handleNavigation = (screen: string, params?: any) => {
    if (screen === 'WebView' && params?.url) {
      setWebViewUrl(params.url);
    } else {
      setWebViewUrl(null);
    }
    if (params?.id) {
      setSelectedMovieId(params.id);
    } else {
      setSelectedMovieId(null);
    }
    if (screen === 'GenreMovies' && params?.genreId && params?.genreName) {
      setGenreDetails({ genreId: params.genreId, genreName: params.genreName });
    } else {
      setGenreDetails(null);
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={handleNavigation} onMoviePress={(id: number) => setSelectedMovieId(id)} />;
      case 'Search':
        return <SearchScreen />;
      case 'Settings':
        return <SettingsScreen />;
      case 'WebView':
        return <WebViewScreen url={webViewUrl} onClose={() => handleNavigation('Home')} />;
      case 'GenreMovies':
        return genreDetails ? (
          <GenreMoviesScreen
            genreId={genreDetails.genreId}
            genreName={genreDetails.genreName}
            onNavigate={handleNavigation}
            onMoviePress={(id: number) => setSelectedMovieId(id)}
          />
        ) : (
          <HomeScreen onNavigate={handleNavigation} onMoviePress={(id: number) => setSelectedMovieId(id)} />
        );
      default:
        return <HomeScreen onNavigate={handleNavigation} onMoviePress={(id: number) => setSelectedMovieId(id)} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {renderScreen()}
        {selectedMovieId !== null && (
          <MovieDetailsDrawer
            id={selectedMovieId}
            onClose={() => setSelectedMovieId(null)}
            onOpenWebsite={(url: string) => handleNavigation('WebView', { url })}
          />
        )}
      </View>
      <BottomNavigationBar navigate={handleNavigation} currentScreen={currentScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    paddingBottom: 60, // To ensure the content does not overlap with the bottom navigation bar
  },
});

export default Navigation;
