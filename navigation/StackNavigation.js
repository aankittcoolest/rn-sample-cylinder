import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MainTabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={MainTabNavigation}
        independent={true}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
