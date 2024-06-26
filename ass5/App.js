// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>

import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "./components/Theme";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import StatisticsScreen from "./components/StatisticsScreen";
import MyCardsScreen from "./components/CardScreen";
import { Image } from "react-native";
import Home from "./assets/home.png";
import MyCards from "./assets/myCards.png";
import Statistics from "./assets/statictics.png";
import Settings from "./assets/settings.png";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={Home}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="My Cards"
            component={MyCardsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={MyCards}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={Statistics}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={Settings}
                  style={{ width: size, height: size, tintColor: color }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
