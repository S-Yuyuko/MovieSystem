import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Svg, { Line } from 'react-native-svg';
import { getIsDarkTheme } from '../theme/ThemeManager'; // Import the global theme manager

const { height, width } = Dimensions.get('window');

const CrossIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Line x1="18" y1="6" x2="6" y2="18" />
    <Line x1="6" y1="6" x2="18" y2="18" />
  </Svg>
);

const WebViewScreen: React.FC<{ url: string | null; onClose: () => void }> = ({ url, onClose }) => {
  const isDarkTheme = getIsDarkTheme(); // Get the current theme state
  const styles = isDarkTheme ? darkStyles : lightStyles; // Choose the styles based on the theme

  if (!url) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Invalid URL</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <CrossIcon size={24} color={isDarkTheme ? '#fff' : '#000'} />
      </TouchableOpacity>
      <WebView source={{ uri: url }} style={styles.webView} />
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Light background color
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 10,
  },
  webView: {
    flex: 1,
    marginTop: 50, // Adjust this value if needed to account for the close button
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Light background color
  },
  errorText: {
    color: '#000', // Darker text color
    fontSize: 18,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 10,
  },
  webView: {
    flex: 1,
    marginTop: 50, // Adjust this value if needed to account for the close button
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background color
  },
  errorText: {
    color: '#fff', // Lighter text color
    fontSize: 18,
  },
});

export default WebViewScreen;
