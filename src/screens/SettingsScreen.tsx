import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { setIsDarkTheme, getIsDarkTheme } from '../theme/ThemeManager'; // Import the theme manager
import { lightStyles, darkStyles } from './styles/SettingsScreenStyles'; // Import the styles

const SettingsScreen: React.FC = () => {
  const [isDark, setIsDark] = useState(getIsDarkTheme());

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDark);
    setIsDark(!isDark);
  };

  const styles = isDark ? darkStyles : lightStyles; // Choose the styles based on the theme

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Theme</Text>
          <Switch
            value={isDark}
            onValueChange={handleToggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch
            value={true} // Replace with actual state and handler
            onValueChange={() => {}}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={'#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
