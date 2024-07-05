import React from 'react';
import { View, Text, Image, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { MovieDrawerUtils } from './utils/MovieDrawerUtils';
import { lightStyles, darkStyles } from './styles/MovieDetailsDrawerStyles';

const MovieDetailsDrawer: React.FC<{ id: number; onClose: () => void; onOpenWebsite: (url: string) => void }> = ({ id, onClose, onOpenWebsite }) => {
  const { movie, loading, slideAnim, isDarkTheme, styles, handleClose, handleOpenWebsite } = MovieDrawerUtils(id, onClose, onOpenWebsite);
  const themeStyles = styles === 'dark' ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <Animated.View style={[themeStyles.drawer, { transform: [{ translateY: slideAnim }] }]}>
      <TouchableOpacity style={themeStyles.closeButton} onPress={handleClose}>
        <View style={themeStyles.lineWrapper}>
          <View style={themeStyles.line} />
        </View>
      </TouchableOpacity>
      {loading ? (
        <View style={themeStyles.loadingContainer}>
          <Text style={themeStyles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView style={themeStyles.scrollContainer} contentContainerStyle={themeStyles.scrollContent}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={themeStyles.image} />
          <Text style={themeStyles.title}>{movie.title}</Text>
          <Text style={themeStyles.overview}>{movie.overview}</Text>
          <TouchableOpacity onPress={handleOpenWebsite}>
            <Text style={themeStyles.link}>Visit More</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Animated.View>
  );
};

export default MovieDetailsDrawer;
