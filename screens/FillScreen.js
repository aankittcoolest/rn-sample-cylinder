import React from "react";
import { ScrollView, Text, StyleSheet, Button } from "react-native";

import filledLoadmanData from "../data/filled-loadman";
import FormattedTable from "../components/blocks/FormattedTable";

const FillScreen = (props) => {
  const handleChallanClick = (challanNumber) => {
    //TODO forward challan number also
    props.navigation.push("Issue Challan");
  };
  filledLoadmanData.data.forEach((x) => {
    if (x[0] === "" || x[0] === "TOTAL") {
      return;
    }
    let challanNumber = x[0];
    x[0] = (
      <Button onPress={() => handleChallanClick(challanNumber)} title={x[0]} />
    );
  });
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

export default FillScreen;
