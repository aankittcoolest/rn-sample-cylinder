import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Test1Component from "../components/Test1Component";
import Test2Component from "../components/Test2Component";

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
        component={Test1Component}
        options={{ title: "Issued" }}
      />
      <Tab.Screen
        name="Test2"
        options={{ title: "Received" }}
        component={Test2Component}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
