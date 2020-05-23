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
  if (type == "issue") {
    props.data.headers[0] = (
      <Image
        source={require("../assets/images/filled.png")}
        style={{
          width: 30,
          height: 30,
        }}
      />
    );
  } else {
    props.data.headers[0] = (
      <Image
        source={require("../assets/images/empty.png")}
        style={{
          width: 30,
          height: 30,
        }}
      />
    );
  }

  let data = props.data.data;
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === "LOADMAN") {
      continue;
    }
    if (data[i][0] === "HAWKER") {
      continue;
    }
    if (data[i][0] === "TOTAL") {
      continue;
    }
    for (let j = 1; j < data[i].length; j++) {
      if (data[i][j] === "0") {
        continue;
      }
      data[i][j] = <Button title={data[i][j]} />;
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
