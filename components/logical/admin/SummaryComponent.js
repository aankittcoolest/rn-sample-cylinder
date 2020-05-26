import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormattedTable from "../../blocks/FormattedTable";

import { useSelector } from "react-redux";

const SummaryComponent = (props) => {
  let data = useSelector((state) => state.summary);

  data.data = data.data.map((item) => {
    let name = item.site;
    item.site = (
      <Text
        onPress={() => props.navigation.push("Admin Godown View", { name })}
        style={styles.item}
      >
        {item.site}
      </Text>
    );
    item = Object.values(item);
    return item;
  });

  return (
    <View>
      <FormattedTable headers={data.headers} data={data.data} />
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
