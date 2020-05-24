import React from "react";
import { Button } from "react-native-material-ui";
import { View, StyleSheet } from "react-native";

const SaveCancelComponent = (props) => {
  return (
    <View style={styles.container}>
      <Button raised primary text="Save" onPress={props.handleSave} />
      <Button raised default text="Cancel" onPress={props.handleCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default SaveCancelComponent;
