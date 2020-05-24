import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DateComponent = (props) => {
  return (
    <View style={styles.dateRow}>
      <AntDesign name="leftcircleo" size={30} color="black" />
      <Text style={styles.date}>12 Dec 2020</Text>
      <AntDesign name="rightcircleo" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  dateRow: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  date: {
    fontSize: 20,
  },
  button: {},
});

export default DateComponent;
