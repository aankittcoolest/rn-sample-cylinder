import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import filledLoadmanData from "../data/filled-loadman";
import FormattedTable from "../components/FormattedTable";

const EmptyScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <FormattedTable
        headers={filledLoadmanData.headers}
        data={filledLoadmanData.data}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
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

export default EmptyScreen;
