import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-material-ui";

import { LabelStyle } from "./LabelStyleComponent";

const CardComponent = (props) => {
  let items = [];

  props.items.forEach((x) =>
    items.push(
      <View style={styles.row} key={x.key}>
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
            <Text
              style={LabelStyle(props.metadata.labelColor, 13).headingLabel}
            >
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
              onPress={() => props.handleEdit(props.id)}
            />
          </View>
          <View style={styles.button}>
            <Button
              raised
              accent
              text="Delete"
              onPress={() => props.handleDelete(props.id)}
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
    alignItems: "center",
    marginVertical: 10,
  },
  headingText: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
  row: {
    backgroundColor: "#ebedeb",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  rowHead: {
    flex: 0.8,
    marginRight: 2,
    paddingLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,
    fontSize: 15,
    fontFamily: "open-sans",
    borderRightWidth: 2,
    borderColor: "#fff",
  },
  rowData: {
    flex: 1,
    marginRight: 2,
    paddingLeft: 5,
    paddingVertical: 2,
    paddingHorizontal: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: 15,
    fontFamily: "open-sans",
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
