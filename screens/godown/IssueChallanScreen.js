import React, { useState } from "react";
import { View, Button, StyleSheet, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import challanData from "../../data/challan-data";
import HeaderComponent from "../../components/blocks/HeaderComponent";
import FormattedTable from "../../components/blocks/FormattedTable";
import TextInputComponent from "../../components/blocks/TextInputComponent";
import TextViewComponent from "../../components/blocks/TextViewComponent";
import LabelComponent from "../../components/blocks/LabelComponent";

import Constants from "../../constants/Constants";

import SharePdf from "../pdf/SharePdf";

const IssueChallanScreen = (props) => {
  const handlePrintChallan = () => {
    console.log("handle print challan");
  };

  const handleViewChallan = () => {
    props.navigation.push("View Challan pdf");
  };

  const handleDriverName = (value) => {};
  const handleMobileNumber = (value) => {};
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <HeaderComponent name="Issue Challan" />
        <View style={styles.container}>
          <LabelComponent
            labelColor={Constants.labels.warning}
            labelName="Pending"
          />
          <TextViewComponent
            label="Driver Name"
            handleTextInput={handleDriverName}
            value="sample name"
            enabled="false"
          />
          <TextViewComponent
            label="Mobile Number"
            handleTextInput={handleMobileNumber}
            keyboardType="numeric"
            value="98989898"
          />
          <TextViewComponent label="Challan No." value="123456" />
          <TextViewComponent label="Type" value="Site" />
          <TextViewComponent
            label="Name"
            enabled="false"
            value="Ramesh Kumar"
          />
          <FormattedTable
            headers={challanData.headers}
            data={challanData.data}
            tableName="Items list"
          />
          <Button
            title="Generate and View Challan"
            onPress={handleViewChallan}
          />
          <SharePdf />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default IssueChallanScreen;
