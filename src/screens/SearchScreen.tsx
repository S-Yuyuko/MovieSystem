import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieDetailsDrawer from '../components/MovieDetailsDrawer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SearchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#ccc' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M21 21L16.65 16.65" />
    <Path d="M11 19A8 8 0 1 1 19 11A8 8 0 0 1 11 19Z" />
  </Svg>
);

const ClearIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#ccc' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M18 6L6 18" />
    <Path d="M6 6L18 18" />
  </Svg>
);

const SearchScreen: React.FC = () => {
  const { query, setQuery, results, searching, handleSearch, clearResults, errorMessage } = useSearchMovies();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [searchActivated, setSearchActivated] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleSearchPress = () => {
    if (query.trim() === '') {
      return; // If query is null or empty, do not proceed with the search
    }
    handleSearch();
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setSearchActivated(true);
  };

  const handleClearPress = () => {
    clearResults();
    setSearchActivated(false);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleMoviePress = (id: number) => {
    setSelectedMovieId(id);
  };

  const closeDrawer = () => {
    setSelectedMovieId(null);
  };

  const containerTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight / 2 - 30, 10],
  });

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
              placeholderTextColor="#ccc"
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearchPress}
            />
            <TouchableOpacity onPress={handleSearchPress}>
              <SearchIcon size={28} color="#ccc" />
            </TouchableOpacity>
            {query ? (
              <TouchableOpacity onPress={handleClearPress} style={styles.clearButton}>
                <ClearIcon size={28} color="#ccc" />
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#000', // Add a background color if needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay for better text visibility
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000, // Higher value to bring it to the front
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60, // Increased height
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20, // Adjusted for larger height
    paddingHorizontal: 20, // Increased padding
    backgroundColor: '#333',
    width: '95%',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 18, // Increased font size
  },
  searchIcon: {
    marginLeft: 10,
  },
  clearButton: {
    marginLeft: 10,
  },
  errorMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#ff6b6b',
    fontSize: 18,
    marginTop: 20,
  },
  resultsContainer: {
    marginTop: 80, // Adjust this value if needed for proper spacing
  },
  resultsList: {
    paddingBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Increased gap between items
    paddingHorizontal: 10,
  },
  resultImage: {
    width: 50,
    height: 75,
    borderRadius: 10,
    marginRight: 10,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    color: '#fff',
    fontSize: 16,
  },
  resultOverview: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default SearchScreen;
