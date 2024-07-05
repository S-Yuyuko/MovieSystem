import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Animated, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';
import { getIsDarkTheme } from '../theme/ThemeManager'; // Import the global theme manager
import { lightStyles, darkStyles } from './styles/SearchScreenStyles'; // Import the styles

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SearchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#666' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M21 21L16.65 16.65" />
    <Path d="M11 19A8 8 0 1 1 19 11A8 8 0 0 1 11 19Z" />
  </Svg>
);

const ClearIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#666' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 6L6 18" />
    <Path d="M6 6L18 18" />
  </Svg>
);

const SearchScreen: React.FC = () => {
  const {
    query,
    setQuery,
    results,
    searching,
    handleSearchPress,
    handleClearPress,
    errorMessage,
    selectedMovieId,
    handleMoviePress,
    closeDrawer,
    searchActivated,
    animatedValue,
    containerTranslateY,
    isDarkTheme,
  } = useSearchMovies(); // Use the updated hook

  const styles = isDarkTheme ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <View style={styles.background}>
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Animated.View style={[styles.searchContainer, { transform: [{ translateY: containerTranslateY }] }]}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a movie..."
              placeholderTextColor={isDarkTheme ? '#999' : '#666'}
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearchPress}
            />
            <TouchableOpacity onPress={handleSearchPress}>
              <SearchIcon size={28} color={isDarkTheme ? '#ccc' : '#666'} />
            </TouchableOpacity>
            {query ? (
              <TouchableOpacity onPress={handleClearPress} style={styles.clearButton}>
                <ClearIcon size={28} color={isDarkTheme ? '#ccc' : '#666'} />
              </TouchableOpacity>
            ) : null}
          </View>
        </Animated.View>
        {errorMessage ? (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        ) : searchActivated && (
          <Animated.View style={{ flex: 1, opacity: animatedValue }}>
            <FlatList
              style={styles.resultsContainer}
              data={results}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMoviePress(item.id)}>
                  <View style={styles.resultItem}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }} style={styles.resultImage} />
                    <View style={styles.resultTextContainer}>
                      <Text style={styles.resultTitle}>{item.title}</Text>
                      <Text style={styles.resultOverview} numberOfLines={3} ellipsizeMode="tail">
                        {item.overview}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.resultsList}
            />
          </Animated.View>
        )}
        {selectedMovieId !== null && <MovieDetailsDrawer id={selectedMovieId} onClose={closeDrawer} />}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SearchScreen;
