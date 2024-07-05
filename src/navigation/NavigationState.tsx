import { useState, useEffect } from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WebViewScreen from '../screens/WebViewScreen';
import GenreMoviesScreen from '../screens/GenreMoviesScreen';
import { setIsDarkTheme, getIsDarkTheme } from '../theme/ThemeManager';

export const useNavigationState = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);
  const [genreDetails, setGenreDetails] = useState<{ genreId: number; genreName: string } | null>(null);
  const [isDark, setIsDark] = useState(getIsDarkTheme()); // State for theme

  useEffect(() => {
    setIsDarkTheme(isDark);
  }, [isDark]);

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

  return {
    currentScreen,
    selectedMovieId,
    isDark,
    handleNavigation,
    renderScreen,
  };
};
