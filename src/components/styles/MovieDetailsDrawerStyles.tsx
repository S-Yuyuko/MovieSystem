import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const lightStyles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.8,
    backgroundColor: '#ffffff', // Light background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 10,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
    width: '100%',
  },
  lineWrapper: {
    width: '100%',
    height: 40, // Increased touchable area height
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 5,
    backgroundColor: '#aaa', // Darker line color
    borderRadius: 2.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#000', // Darker text color
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.6, // Adjust this value to fit the aspect ratio
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Darker text color
    marginVertical: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 16,
    color: '#333', // Darker text color
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
});

export const darkStyles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.8,
    backgroundColor: '#121212', // Dark background
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 10,
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
    width: '100%',
  },
  lineWrapper: {
    width: '100%',
    height: 40, // Increased touchable area height
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 5,
    backgroundColor: '#444', // Lighter line color
    borderRadius: 2.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff', // Lighter text color
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.6, // Adjust this value to fit the aspect ratio
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Lighter text color
    marginVertical: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 16,
    color: '#ccc', // Lighter text color
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#bb86fc',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
});
