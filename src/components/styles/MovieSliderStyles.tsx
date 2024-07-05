import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const lightStyles = {
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.6,
    backgroundColor: '#ffffff',
  },
  image: {
    width: width,
    height: '100%',
  },
};

export const darkStyles = {
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.6,
    backgroundColor: '#121212',
  },
  image: {
    width: width,
    height: '100%',
  },
};
