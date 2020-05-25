import React from "react";
import { StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

const GodownToolbarComponent = (props) => {
  return (
    <Toolbar
      leftElement="menu"
      rightElement={{
        menu: {
          icon: "more-vert",
          labels: ["Logout"],
        },
      }}
      onRightElementPress={(label) => {
        if (label.index === 0) {
          props.navigation.replace("Login");
        }
      }}
    />
  );
};

export default GodownToolbarComponent;
