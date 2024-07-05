import React from 'react';
import Svg, { Path } from 'react-native-svg';

const GenreIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#1E90FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M3 12L21 12" />
    <Path d="M3 6L21 6" />
    <Path d="M3 18L21 18" />
  </Svg>
);
export default GenreIcon;
