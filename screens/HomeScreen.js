import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

import StockComponent from "../components/logical/StockComponent.js";
import IssueReceiveComponent from "../components/logical/IssueReceiveComponent.js";
import DateComponent from "../components/blocks/DateComponent.js";

import issuedFilledCylinderData from "../data/issued-filled-cylinder";

const HomeScreen = (props) => (
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

export default HomeScreen;
