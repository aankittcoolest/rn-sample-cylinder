import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SitesScreen from "../screens/site/SitesScreen";
import UsersScreen from "../screens/user/UsersScreen";
import ItemsScreen from "../screens/item/ItemsScreen";

const Tab = createMaterialTopTabNavigator();

const MaintainTabNavigation = (props) => {
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
      <Tab.Screen
        name="sites"
        options={{ title: "Sites" }}
        component={SitesScreen}
      />
      <Tab.Screen name="users" options={{ title: "Users" }}>
        {() => <UsersScreen />}
      </Tab.Screen>
      <Tab.Screen name="items" options={{ title: "Items" }}>
        {() => <ItemsScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MaintainTabNavigation;
