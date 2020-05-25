import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-material-ui";

const GodownOperationsComponent = (props) => {
  return (
    <View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button raised primary text="ISSUE" />
        </View>
        <View style={styles.button}>
          <Button raised primary text="RECEIVE" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button raised primary text="NC ISSUE" />
          </View>
          <View style={styles.button}>
            <Button raised primary text="TV OUT RECEIVE" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    paddingVertical: 20,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default GodownOperationsComponent;
