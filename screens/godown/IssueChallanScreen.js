import React, { useState } from "react";
import { View, Button, StyleSheet, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import challanData from "../../data/challan-data";
import HeaderComponent from "../../components/blocks/HeaderComponent";
import FormattedTable from "../../components/blocks/FormattedTable";
import TextInputComponent from "../../components/blocks/TextInputComponent";

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
          <TextInputComponent
            label="Driver Name"
            handleTextInput={handleDriverName}
            value="sample name"
            enabled="false"
          />
          <TextInputComponent
            label="Mobile Number"
            handleTextInput={handleMobileNumber}
            keyboardType="numeric"
            value="98989898"
          />
          <TextInputComponent
            label="Challan No."
            enabled="false"
            value="123456"
          />
          <TextInputComponent
            label="Date"
            enabled="false"
            value="Thu 23 March 2020 12:00 PM"
          />
          <TextInputComponent label="Type" enabled="false" value="Site" />
          <TextInputComponent
            label="Name"
            enabled="false"
            value="Ramesh Kumar"
          />
          <FormattedTable
            headers={challanData.headers}
            data={challanData.data}
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
const styles = StyleSheet.create({});

export default IssueChallanScreen;
