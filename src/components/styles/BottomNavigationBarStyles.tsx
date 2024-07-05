import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff', // White background for light mode
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10, // Ensure it stays above other components
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#aaa', // Light gray for inactive items
    fontSize: 12,
  },
  activeNavText: {
    color: 'black', // Black for active items
  },
  icon: {
    marginBottom: 2,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#121212', // Dark background for dark mode
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10, // Ensure it stays above other components
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#aaa', // Light gray for inactive items
    fontSize: 12,
  },
  activeNavText: {
    color: 'white', // White for active items
  },
  icon: {
    marginBottom: 2,
  },
});
