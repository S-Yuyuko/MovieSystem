import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SearchIconProps {
  size?: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ size = 24, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M21 21L16.65 16.65" />
    <Path d="M11 19A8 8 0 1 1 19 11A8 8 0 0 1 11 19Z" />
  </Svg>
);

export default SearchIcon;
