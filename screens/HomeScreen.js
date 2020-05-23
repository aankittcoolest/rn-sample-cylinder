import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

import StockComponent from "../components/StockComponent.js";
import IssueReceiveComponent from "../components/IssueReceiveComponent.js";
import DateComponent from "../components/DateComponent.js";

import issuedFilledCylinderData from "../data/issued-filled-cylinder";

import { ActionButton } from "react-native-material-ui";

const HomeScreen = (props) => (
  <View style={styles.container}>
    <Toolbar
      leftElement="menu"
      rightElement={{
        menu: {
          icon: "more-vert",
          labels: ["item 1", "item 2"],
        },
      }}
      onRightElementPress={(label) => {
        console.log(label);
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
    <ActionButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});

export default HomeScreen;
