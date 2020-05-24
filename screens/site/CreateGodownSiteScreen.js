import React from "react";
import { StyleSheet, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/TextInputComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

const CreateGodownSite = (props) => {
  const handleSave = () => {
    console.log("handling save");
  };

  const handleCancel = () => {
    console.log("handling cancle");
  };

  const handleInchargeTextInput = (text) => {};
  const handleMobileTextInput = (text) => {};

  const handleAddressTextInput = (text) => {};
  const handleCityTextInput = (text) => {};
  const handleStateTextInput = (text) => {};
  const handlePinCodeTextInput = (text) => {};
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <TextInputComponent
          label="Godown Incharge"
          handleTextInput={handleInchargeTextInput}
        />
        <TextInputComponent
          label="Mobile No."
          handleTextInput={handleMobileTextInput}
        />
        <TextInputComponent
          label="Address"
          handleTextInput={handleAddressTextInput}
        />
        <TextInputComponent
          label="City"
          handleTextInput={handleCityTextInput}
        />
        <TextInputComponent
          label="State"
          handleTextInput={handleStateTextInput}
        />
        <TextInputComponent
          label="PinCode"
          handleTextInput={handlePinCodeTextInput}
        />
        <SaveCancelComponent
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
});

export default CreateGodownSite;
