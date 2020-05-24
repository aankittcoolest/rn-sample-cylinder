import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import DateComponent from "../../components/blocks/DateComponent.js";
import AdminToolbar from "../../components/logical/toolbars/AdminToolbar";

const AdminRoleScreen = (props) => (
  <View style={styles.container}>
    <AdminToolbar />
    <DateComponent />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default AdminRoleScreen;
