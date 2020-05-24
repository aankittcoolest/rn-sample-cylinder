import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Constants from "../constants/Constants";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

const TextInputComponent = (props) => {
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
      <TextInput
        placeholder={props.placeholder}
        selectionColor={BLUE}
        underlineColorAndroid={isFocussed ? BLUE : LIGHT_GRAY}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text) => props.handleTextInput(text)}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLabel: {
    fontSize: 18,
    color: Constants.itemLabelsColor,
  },
  textInput: {
    fontSize: 20,
    height: 60,
    paddingLeft: 6,
    color: Constants.secondaryColor,
  },
});

export default TextInputComponent;
