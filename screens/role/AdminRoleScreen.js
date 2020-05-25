import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import DateComponent from "../../components/blocks/DateComponent.js";
import AdminToolbar from "../../components/logical/toolbars/AdminToolbar";

import SummaryComponent from "../../components/logical/admin/SummaryComponent";

const AdminRoleScreen = (props) => {
  return (
    <View style={styles.container}>
      <AdminToolbar />
      <DateComponent />
      <SummaryComponent navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default AdminRoleScreen;
