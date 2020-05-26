import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-material-ui";

import { LabelStyle } from "./LabelStyleComponent";

const Card1Component = (props) => {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Test Heading</Text>
            <Text style={LabelStyle("#888").headingLabel}>Hello</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowHead}>Item 1</Text>
            <Text style={styles.rowData}>Value 1</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowHead}>Item Item Item 1</Text>
            <Text style={styles.rowData}>Value 1</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button raised primary text="Edit" onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button raised accent text="Delete" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  headingText: {
    fontSize: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 2,
  },
  rowHead: {
    flex: 0.4,
    backgroundColor: "#ebedeb",
    marginRight: 2,
    paddingLeft: 5,
    paddingVertical: 2,
  },
  rowData: {
    flex: 1,
    backgroundColor: "#ebedeb",
    marginRight: 2,
    paddingLeft: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
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

export default Card1Component;
