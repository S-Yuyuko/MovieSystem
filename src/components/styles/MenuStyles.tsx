import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const lightStyles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Light background
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#000', // Darker text color
    fontSize: 18,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light semi-transparent background
    padding: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  genreItem: {
    color: '#000', // Darker text color
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Lighter border color
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff', // Lighter text color
    fontSize: 18,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark semi-transparent background
    padding: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  genreItem: {
    color: '#fff', // Lighter text color
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Darker border color
  },
});
