import React from "react";
import { Text, StyleSheet } from "react-native";

import Constants from "../../constants/Constants";

const HeaderComponent = (props) => {
  return <Text style={styles.title}>{props.name}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 25,
    paddingLeft: 15,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    color: Constants.labels.success,
  },
});

export default HeaderComponent;
