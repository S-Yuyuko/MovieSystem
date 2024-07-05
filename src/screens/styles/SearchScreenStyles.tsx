import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const lightStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#ffffff', // Light background color
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional overlay for better text visibility
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
    backgroundColor: '#f0f0f0',
    width: '95%',
  },
  searchInput: {
    flex: 1,
    color: '#000',
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
    color: '#000',
    fontSize: 16,
  },
  resultOverview: {
    color: '#666',
    fontSize: 14,
  },
});

export const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#121212', // Dark background color
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optional overlay for better text visibility
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
    borderColor: '#444',
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
