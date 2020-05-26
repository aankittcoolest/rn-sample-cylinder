import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import SitesScreen from "../screens/site/SitesScreen";
import EditVehicleSiteScreen from "../screens/site/EditVehicleSiteScreen";

const StackNavigation = (props) => {
  return (
    <View>
      <Stack.Screen name="sites" component={SitesScreen} />{" "}
      <Stack.Screen name="edit site" component={EditVehicleSiteScreen} />{" "}
    </View>
  );
};

export default StackNavigation;
