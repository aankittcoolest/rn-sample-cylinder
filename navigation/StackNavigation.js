import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  console.log(props);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={TabNavigation}
        independent={true}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
