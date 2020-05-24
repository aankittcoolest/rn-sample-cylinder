import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import EmptyFillTabNavigation from "./EmptyFillTabNavigation";
import MaintainTabNavigation from "./MaintainTabNavigation";
import CreateSiteScreen from "../screens/site/CreateSiteScreen";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Add Site" component={CreateSiteScreen} />
      <Stack.Screen
        name="Details"
        component={EmptyFillTabNavigation}
        independent={true}
      />
      <Stack.Screen name="Maintain" component={MaintainTabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
