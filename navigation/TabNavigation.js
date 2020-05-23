import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FillScreen from "../screens/FillScreen";
import EmptyScreen from "../screens/EmptyScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
        labelStyle: {
          fontSize: 20,
        },
        tabStyle: {},
      }}
    >
      <Tab.Screen
        name="Test1"
        component={FillScreen}
        options={{ title: "Fill" }}
      />
      <Tab.Screen
        name="Test2"
        options={{ title: "Emtpy" }}
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
