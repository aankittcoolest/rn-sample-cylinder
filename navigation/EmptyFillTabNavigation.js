import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FillScreen from "../screens/FillScreen";
import EmptyScreen from "../screens/EmptyScreen";

const Tab = createMaterialTopTabNavigator();

const EmptyFillTabNavigation = (props) => {
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
      <Tab.Screen name="fill" options={{ title: "Fill" }}>
        {() => (
          <FillScreen
            name={props.route.params.name}
            navigation={props.navigation}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="empty" options={{ title: "Empty" }}>
        {() => (
          <EmptyScreen
            name={props.route.params.name}
            navigation={props.navigation}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default EmptyFillTabNavigation;
