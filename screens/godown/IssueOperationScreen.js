import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import PickerComponent from "../../components/blocks/PickerComponent";
import TextInputComponent from "../../components/blocks/TextInputComponent";
import HeaderComponent from "../../components/blocks/HeaderComponent";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

const IssueOperationScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("1");
  let items = [
    { label: "IOCL", value: "1" },
    { label: "loadman", value: "2" },
    { label: "hawker", value: "2" },
    { label: "consumer", value: "2" },
  ];

  const handleSave = () => {
    console.log("handling save");
  };

  const handleCancel = () => {
    console.log("handling cancle");
  };

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

  const handle14KgCountTextInput = (value) => {};
  const handle19KgCountTextInput = (value) => {};
  const handle5KgDomesticCountTextInput = (value) => {};
  const handle5KgCommercialCountTextInput = (value) => {};
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <HeaderComponent name="Issue Cylinders" />
        <View style={styles.container}>
          <PickerComponent
            label="Select Entity"
            items={items}
            selectedValue={selectedValue}
            handleSelectedValue={handleSelectedValue}
          />
          <TextInputComponent
            label="5.00 Kg Commercial Cylinder"
            handleTextInput={handle5KgCommercialCountTextInput}
            keyboardType="numeric"
          />
          <TextInputComponent
            label="5.00 Kg Domestic Cylinder"
            handleTextInput={handle5KgDomesticCountTextInput}
            keyboardType="numeric"
          />
          <TextInputComponent
            label="14.20 Kg Cylinder"
            handleTextInput={handle14KgCountTextInput}
            keyboardType="numeric"
          />
          <TextInputComponent
            label="19.00 Kg Cylinder"
            handleTextInput={handle19KgCountTextInput}
            keyboardType="numeric"
          />
          <SaveCancelComponent
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 100,
  },
});

export default IssueOperationScreen;
