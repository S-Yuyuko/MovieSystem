import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  movieContainer: {
    marginRight: 10,
    width: 100,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginTop: 5,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  movieContainer: {
    marginRight: 10,
    width: 100,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 5,
  },
});
