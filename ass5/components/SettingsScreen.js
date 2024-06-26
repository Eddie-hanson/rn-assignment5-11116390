// SettingsScreen.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { ThemeContext } from "./Theme"; // Adjust the path accordingly

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <Text style={[styles.title, isDarkTheme && styles.darkText]}>
        Settings
      </Text>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          Language
        </Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          My Profile
        </Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          Contact Us
        </Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          Change Password
        </Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          Privacy Policy
        </Text>
      </View>
      <View style={styles.themeToggleContainer}>
        <Text style={[styles.settingText, isDarkTheme && styles.darkText]}>
          Theme
        </Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  darkText: {
    color: "#fff",
  },
  settingItem: {
    marginTop: 20,
  },
  settingText: {
    fontSize: 18,
  },
  themeToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SettingsScreen;
