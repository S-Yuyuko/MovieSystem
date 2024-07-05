import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Light background color
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 10,
  },
  title: {
    color: '#000', // Darker text color
    fontSize: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    color: '#1E90FF',
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f0f0f0', // Light gray background for movie items
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieDetails: {
    flex: 1,
    padding: 10,
  },
  movieTitle: {
    color: '#000', // Darker text color
    fontSize: 18,
    marginBottom: 5,
  },
  movieOverview: {
    color: '#666', // Darker text color
    fontSize: 14,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 10,
  },
  title: {
    color: '#fff', // Lighter text color
    fontSize: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    color: '#bb86fc',
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#333', // Darker gray background for movie items
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieDetails: {
    flex: 1,
    padding: 10,
  },
  movieTitle: {
    color: '#fff', // Lighter text color
    fontSize: 18,
    marginBottom: 5,
  },
  movieOverview: {
    color: '#ccc', // Lighter text color
    fontSize: 14,
  },
});
