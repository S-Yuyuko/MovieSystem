import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SettingsIconProps {
  size?: number;
  color?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ size = 24, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M12 8V4M12 16V20M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4 12H8M16 12H20M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
    <Path d="M12 15A3 3 0 1 1 15 12A3 3 0 0 1 12 15Z" />
  </Svg>
);

export default SettingsIcon;
