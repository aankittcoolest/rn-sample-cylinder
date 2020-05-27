import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Constants from "../../constants/Constants";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

const TextViewComponent = (props) => {
  const [isFocussed, setIsFocussed] = useState(false);

  const handleFocus = (event) => {
    setIsFocussed(true);
  };

  const handleBlur = (event) => {
    setIsFocussed(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{props.label}</Text>
      <Text onFocus={handleFocus} onBlur={handleBlur} style={styles.textView}>
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  textLabel: {
    fontSize: 18,
    color: Constants.itemLabelsColor,
    paddingBottom: 10,
  },
  textView: {
    fontSize: 20,
    height: 40,
    paddingLeft: 6,
    color: Constants.secondaryColor,
    borderBottomWidth: 0.5,
  },
});

export default TextViewComponent;
