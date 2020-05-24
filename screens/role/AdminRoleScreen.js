import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

import StockComponent from "../../components/StockComponent";
import IssueReceiveComponent from "../../components/IssueReceiveComponent.js";
import DateComponent from "../../components/DateComponent.js";

import issuedFilledCylinderData from "../../data/issued-filled-cylinder";

const AdminRoleScreen = (props) => (
  <View style={styles.container}>
    <Toolbar
      leftElement="menu"
      rightElement={{
        menu: {
          icon: "more-vert",
          labels: ["Maintain", "Logout"],
        },
      }}
      onRightElementPress={(label) => {
        if (label.index === 0) {
          props.navigation.push("Maintain");
        }
        if (label.index === 1) {
          props.navigation.replace("Login");
        }
      }}
    />
    <DateComponent />
    <ScrollView>
      <StockComponent />
      <IssueReceiveComponent
        data={issuedFilledCylinderData}
        title="Issue Matrix"
        type="issue"
        navigation={props.navigation}
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default AdminRoleScreen;
