import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Button,
} from "react-native";
import FormattedTable from "./FormattedTable";

const IssueReceiveComponent = (props) => {
  let type = props.type;
  props.data.headers[0] = (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/filled.png")}
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text style={styles.headerText}>/</Text>
      <Image
        source={require("../assets/images/empty.png")}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
  );

  let data = props.data.data;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === "LOADMAN") {
      continue;
    }
    if (data[i][0] === "HAWKER") {
      continue;
    } else {
      for (let j = 1; j < data[i].length; j++) {
        let breakdown = data[i][j].split("/");
        if (breakdown[0] === "0") {
          continue;
        } else if (breakdown[0] === "0") {
          data[i][j] = (
            <View>
              <Button title={breakdown[0]} />
              <Text>/0</Text>
            </View>
          );
        } else {
          data[i][j] = (
            <View style={styles.header}>
              <Text style={{ color: "red" }}>{breakdown[0]}</Text>
              <Text> / </Text>
              <Text style={{ color: "blue" }}>{breakdown[1]}</Text>
            </View>
          );
        }
        // data[i][j] = <Button title={data[i][j]} />;
        console.log(data[i][j]);
      }
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FormattedTable headers={props.data.headers} data={props.data.data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    paddingLeft: 3,
  },
  headerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    paddingLeft: 15,
    marginBottom: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    color: "#706b6b",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  weight: {
    paddingTop: 5,
  },
});

export default IssueReceiveComponent;
