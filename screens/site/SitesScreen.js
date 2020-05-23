import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-material-ui";

const SitesScreen = (props) => {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Users screen</Text>
            <Text style={styles.headingLabel}>Label</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowHead}>Godown Incharge</Text>
            <Text style={styles.rowData}> Neeru</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowHead}>Mobile Number</Text>
            <Text style={styles.rowData}>123456789</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button raised primary text="Edit" />
          </View>
          <View style={styles.button}>
            <Button raised accent text="Delete" />
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
    marginHorizontal: 5,
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
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default SitesScreen;
