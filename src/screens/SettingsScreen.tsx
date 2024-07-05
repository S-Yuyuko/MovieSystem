import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Loading from '../components/Loading';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { isDarkTheme, theme, toggleTheme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Appearance</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Dark Theme</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.switchTrack, true: theme.primary }}
            thumbColor={isDarkTheme ? theme.switchThumb : theme.switchThumb}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Notifications</Text>
        <View style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Enable Notifications</Text>
          <Switch
            value={true} // Replace with actual state and handler
            onValueChange={() => {}}
            trackColor={{ false: theme.switchTrack, true: theme.primary }}
            thumbColor={true ? theme.switchThumb : theme.switchThumb}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>About</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
