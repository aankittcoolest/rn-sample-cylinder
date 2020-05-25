import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GodownComponent from "../../components/logical/godown-admin/GodownComponent";
import DateComponent from "../../components/blocks/DateComponent.js";
import GodownToolbar from "../../components/logical/toolbars/GodownToolbar";
import GodownOperationsComponent from "../../components/logical/godown/GodownOperationsComponent";

const GodownDashboardScreen = (props) => {
  return (
    <View style={styles.container}>
      <GodownToolbar />
      <GodownOperationsComponent />
      <DateComponent />
      <GodownComponent navigation={props.navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default GodownDashboardScreen;
