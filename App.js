import React, { useState } from "react";
import { View, Text } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext, getTheme } from "react-native-material-ui";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import defaultTheme from "./themes/defaultTheme";

const FetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <ThemeContext.Provider value={getTheme(defaultTheme)}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
