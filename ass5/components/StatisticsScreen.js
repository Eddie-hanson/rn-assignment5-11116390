import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "./Theme";

const StatisticsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <Text style={[styles.text, isDarkTheme && styles.darkText]}>
        Statistics Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: "#000000",
  },
  darkText: {
    color: "#fff",
  },
  text: {
    fontSize: 30,
    fontWeight: "condensed",
  },
});

export default StatisticsScreen;
