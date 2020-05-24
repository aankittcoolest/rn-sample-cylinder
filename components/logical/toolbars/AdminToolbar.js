import React from "react";
import { StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

const AdminToolbarComponent = (props) => {
  return (
    <Toolbar
      leftElement="menu"
      rightElement={{
        menu: {
          icon: "more-vert",
          labels: ["Maintain", "Logout"],
        },
      }}
      onRightElementPress={(label) => {
        if (label.index === 0) {
          props.navigation.push("Maintain");
        }
        if (label.index === 1) {
          props.navigation.replace("Login");
        }
      }}
    />
  );
};

export default AdminToolbarComponent;
