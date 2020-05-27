import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/blocks/TextInputComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import DatePickerComponent from "../../components/blocks/DatePickerComponent";

import { useDispatch } from "react-redux";
import * as siteAction from "../../store/actions/siteAction";

const CreateVehicleSiteScreen = (props) => {
  let dispatch = useDispatch();
  let dummySite = {
    id: Math.floor(Math.random() * 100),
    site_type_id: 2,
    metadata: {
      title: "Site Owner",
      label: "site",
    },
    data: {
      vehicle_number: { key: "Vehicle No.", value: "" },
      vehicle_make: { key: "Vehicle Make", value: "" },
      driver_name: { key: "Driver Name", value: "" },
      mobile: { key: "Mobile", value: "" },
      insurance_due_date: {
        key: "Insurance Due Date",
        value: "",
      },
      fitness_due_date: { key: "Fitness Due Date", value: "Sat 23 May 2020" },
      permit_due_date: { key: "Permit Due Date", value: "Sat 23 May 2020" },
      pollution_due_date: {
        key: "Pollution Due Date",
        value: "",
      },
      fire_cylinder_due_date: {
        key: "Fire Cylinder Due Date",
        value: "",
      },
      driver_license_due_date: {
        key: "Driver License Due Date",
        value: "",
      },
    },
  };

  const [site, setSite] = useState(dummySite);

  const handleSave = () => {
    dispatch(siteAction.addSite(site));
    props.route.params.onNavigateBack(site);
    props.navigation.goBack();
  };

  const handleCancel = () => {
    props.navigation.goBack();
  };

  const handleInput = (element, text) => {
    if (text instanceof Date) {
      site.data[element].value = text.toDateString();
    } else {
      site.data[element].value = text;
    }
    setSite(site);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <TextInputComponent
          label="Vehicle No."
          handleTextInput={handleInput}
          element="vehicle_number"
        />
        <TextInputComponent
          label="Make"
          handleTextInput={handleInput}
          element="vehicle_make"
        />
        <TextInputComponent
          label="Driver Name"
          handleTextInput={handleInput}
          element="driver_name"
        />
        <TextInputComponent
          label="Mobile No."
          handleTextInput={handleInput}
          element="mobile"
        />

        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Insurance Due Date"
          element="insurance_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Fitness Due Date"
          element="fitness_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Permit Due Date"
          element="permit_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Pollution Due Date"
          element="pollution_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Fire Cylinder Due Date"
          element="fire_cylinder_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Select Driver Licnese Due Date"
          element="driver_license_due_date"
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
