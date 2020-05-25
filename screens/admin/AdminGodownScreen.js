import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AdminToolbar from "../../components/logical/toolbars/AdminToolbar";
import DateComponent from "../../components/blocks/DateComponent.js";
import GodownComponent from "../../components/logical/godown-admin/GodownComponent";

const AdminGodownScreen = (props) => {
  return (
    <View style={styles.container}>
      <AdminToolbar />
      <DateComponent />
      <GodownComponent navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default AdminGodownScreen;
