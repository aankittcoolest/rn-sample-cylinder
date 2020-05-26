import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import RoleScreen from "../screens/role/RoleScreen";
import AdminRoleScreen from "../screens/role/AdminRoleScreen";
import AdminGodownScreen from "../screens/admin/AdminGodownScreen";
import GodownDashboardScreen from "../screens/godown/GodownDashboardScreen";
import LoadmanDashboardScreen from "../screens/loadman/LoadmanDashboardScreen";
import LoadmanRoleScreen from "../screens/role/LoadmanRoleScreen";
import EmptyFillTabNavigation from "./EmptyFillTabNavigation";
import MaintainTabNavigation from "./MaintainTabNavigation";
import CreateSiteScreen from "../screens/site/CreateSiteScreen";
import SitesScreen from "../screens/site/SitesScreen";
import IssueChallanScreen from "../screens/godown/IssueChallanScreen";
import ViewPdf from "../screens/pdf/ViewPdfScreen";
import EditVehicleSiteScreen from "../screens/site/EditVehicleSiteScreen";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={RoleScreen} />
      <Stack.Screen name="Admin Dashboard" component={AdminRoleScreen} />
      <Stack.Screen name="Admin Godown View" component={AdminGodownScreen} />
      <Stack.Screen
        name="Edit Vehicle Site"
        component={EditVehicleSiteScreen}
      />
      <Stack.Screen
        name="Loadman Dashboard"
        component={LoadmanDashboardScreen}
      />
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Add Site" component={CreateSiteScreen} />
      <Stack.Screen name="Issue Challan" component={IssueChallanScreen} />
      <Stack.Screen name="View Challan pdf" component={ViewPdf} />
      <Stack.Screen name="Sites" component={SitesScreen} />
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
