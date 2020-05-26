import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LabelStyle } from "./LabelStyleComponent";

const LabelComponent = (props) => {
  return (
    <Text style={LabelStyle(props.labelColor, 20).headingLabel}>
      {props.labelName}
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    fontSize: 50,
  },
});

export default LabelComponent;
