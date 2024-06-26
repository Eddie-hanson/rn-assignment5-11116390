import React, { useContext } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider, ThemeContext } from "./components/Theme";
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
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
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
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
