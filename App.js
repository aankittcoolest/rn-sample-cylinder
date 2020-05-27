import React, { useState } from "react";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext, getTheme } from "react-native-material-ui";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import summaryReducer from "./store/reducers/summaryReducer";
import sitesReducer from "./store/reducers/sitesReducer";
import usersReducer from "./store/reducers/usersReducer";
import vehiclesReducer from "./store/reducers/vehiclesReducer";
import loadmansReducer from "./store/reducers/loadmansReducer";

const rootReducer = combineReducers({
  summary: summaryReducer,
  sites: sitesReducer,
  users: usersReducer,
  vehicles: vehiclesReducer,
  loadmans: loadmansReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import defaultTheme from "./themes/defaultTheme";
import loadmans from "./data/loadman-list";

const FetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
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
    <Provider store={store}>
      <ThemeContext.Provider value={getTheme(defaultTheme)}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
}
