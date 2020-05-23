import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import StockComponent from "../components/StockComponent.js";
import IssueReceiveComponent from "../components/IssueReceiveComponent.js";
import DateComponent from "../components/DateComponent.js";

import issuedFilledCylinderData from "../data/issued-filled-cylinder";
import receivedEmptyCylinderData from "../data/received-empty-cylinder";

const HomeScreen = (props) => (
  <View style={styles.container}>
    <DateComponent />
    <ScrollView>
      <StockComponent />
      <IssueReceiveComponent
        data={receivedEmptyCylinderData}
        title="Received Matrix"
        type="receive"
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
