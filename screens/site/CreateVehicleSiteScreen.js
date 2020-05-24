import React from "react";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/TextInputComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import DatePickerComponent from "../../components/blocks/DatePickerComponent";

const CreateVehicleSiteScreen = (props) => {
  const handleSave = () => {
    console.log("handling save");
  };

  const handleCancel = () => {
    console.log("handling cancle");
  };

  const handleVehicleNumberTextInput = (text) => {};
  const handleVehicleMakeTextInput = (text) => {};
  const handleNameTextInput = (text) => {};
  const handleMobileTextInput = (text) => {};
  const handleInsuranceDueDate = (date) => {};
  const handleFitnessDueDate = (date) => {};
  const handlePermitDueDate = (date) => {};
  const handlePollutionDueDate = (date) => {};
  const handleFireCylinderDueDate = (date) => {};
  const handleDriverLicenseDueDate = (date) => {};
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <TextInputComponent
          label="Vehicle No."
          handleTextInput={handleVehicleNumberTextInput}
        />
        <TextInputComponent
          label="Make"
          handleTextInput={handleVehicleMakeTextInput}
        />
        <TextInputComponent
          label="Driver Name"
          handleTextInput={handleNameTextInput}
        />
        <TextInputComponent
          label="Mobile No."
          handleTextInput={handleMobileTextInput}
        />

        <DatePickerComponent
          handleDate={handleInsuranceDueDate}
          date={new Date()}
          label="Select Insurance Due Date"
        />
        <DatePickerComponent
          handleDate={handleFitnessDueDate}
          date={new Date()}
          label="Select Fitness Due Date"
        />
        <DatePickerComponent
          handleDate={handlePermitDueDate}
          date={new Date()}
          label="Select Permit Due Date"
        />
        <DatePickerComponent
          handleDate={handlePollutionDueDate}
          date={new Date()}
          label="Select Pollution Due Date"
        />
        <DatePickerComponent
          handleDate={handleFireCylinderDueDate}
          date={new Date()}
          label="Select Fire Cylinder Due Date"
        />
        <DatePickerComponent
          handleDate={handleDriverLicenseDueDate}
          date={new Date()}
          label="Select Driver Licnese Due Date"
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

export default CreateVehicleSiteScreen;
