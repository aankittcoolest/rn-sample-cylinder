import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import StockComponent from "../godown-admin/StockComponent";
import IssueReceiveComponent from "../godown-admin/IssueReceiveComponent";
import issuedFilledCylinderData from "../../../data/issued-filled-cylinder";

const GodownComponent = (props) => {
  return (
    <ScrollView>
      <StockComponent />
      <IssueReceiveComponent
        data={issuedFilledCylinderData}
        title="Issue Matrix"
        type="issue"
        navigation={props.navigation}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default GodownComponent;
