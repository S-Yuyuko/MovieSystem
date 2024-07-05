import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackArrow: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M19 12H5" />
    <Path d="M12 19L5 12L12 5" />
  </Svg>
);

export default BackArrow;
