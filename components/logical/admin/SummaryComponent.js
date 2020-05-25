import React from "react";
import { View, Text, StyleSheet } from "react-native";

import summaryData from "../../../data/summary-data";
import FormattedTable from "../../blocks/FormattedTable";

const SummaryComponent = (props) => {
  let data = summaryData.data;

  data.forEach((x) => {
    let name = x[0];
    x[0] = (
      <Text
        onPress={() => props.navigation.push("Admin Godown View", { name })}
        style={styles.item}
      >
        {x[0]}
      </Text>
    );
  });

  return (
    <View>
      <FormattedTable headers={summaryData.headers} data={summaryData.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    fontSize: 17,
    color: "#219699",
    paddingLeft: 5,
    paddingTop: 5,
  },
});

export default SummaryComponent;
