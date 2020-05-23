import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FillScreen from "../screens/FillScreen";
import EmptyScreen from "../screens/EmptyScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = (props) => {
  console.log(props.route.params);
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
      <Tab.Screen name="Test1" options={{ title: "Fill" }}>
        {() => <FillScreen name={props.route.params.name} />}
      </Tab.Screen>
      <Tab.Screen name="Test2" options={{ title: "Empty" }}>
        {() => <EmptyScreen name={props.route.params.name} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

// const MainTabNavigation = (props) => {
//   return <TabNavigation tabProps={props.route.params} />;
// };

export default TabNavigation;
