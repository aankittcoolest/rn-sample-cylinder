import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-material-ui";

import { LabelStyle } from "./LabelStyleComponent";

import Constants from "../constants/Constants";

const CardComponent = (props) => {
  let items = [];

  props.items.forEach((x) =>
    items.push(
      <View style={styles.row}>
        <Text style={styles.rowHead}>{x.key}</Text>
        <Text style={styles.rowData}> {x.value}</Text>
      </View>
    )
  );
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>{props.metadata.title}</Text>
            <Text style={LabelStyle(props.metadata.labelColor).headingLabel}>
              {props.metadata.label}
            </Text>
          </View>
          {items}
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              raised
              primary
              text="Edit"
              onPress={() => props.handleEdit(props.metadata.id)}
            />
          </View>
          <View style={styles.button}>
            <Button
              raised
              accent
              text="Delete"
              onPress={() => props.handleDelete(props.metadata.id)}
            />
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

export default CardComponent;
