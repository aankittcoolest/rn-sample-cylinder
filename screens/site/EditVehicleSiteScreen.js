import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/blocks/TextInputComponent";
import TextViewComponent from "../../components/blocks/TextViewComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import DatePickerComponent from "../../components/blocks/DatePickerComponent";
import { useSelector, useDispatch } from "react-redux";

import * as siteActions from "../../store/actions/siteAction";

const EditVehicleSiteScreen = (props) => {
  const dispatch = useDispatch();
  const site = useSelector(
    (state) =>
      state.sites.sites.filter((x) => x.id === props.route.params.id)[0]
  );

  const [siteState, setSiteState] = useState(site);

  const handleCancel = () => {
    props.navigation.navigate();
  };

  const handleSave = () => {
    dispatch(siteActions.editSite(siteState));
    props.route.params.onNavigateBack(siteState);
    props.navigation.goBack();
  };

  const handleInput = (element, text) => {
    if (text instanceof Date) {
      siteState.data[element].value = text.toDateString();
    } else {
      siteState.data[element].value = text;
    }
    setSiteState(siteState);
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <TextViewComponent label="Vehicle No." value="Vehicle Site" />
        <TextInputComponent
          label="Vehicle No."
          handleTextInput={handleInput}
          value={site.data.vehicle_number.value}
          element="vehicle_number"
        />
        <TextInputComponent
          label="Make"
          handleTextInput={handleInput}
          value={site.data.vehicle_make.value}
          element="vehicle_make"
        />
        <TextInputComponent
          label="Driver Name"
          handleTextInput={handleInput}
          value={site.data.driver_name.value}
          element="driver_name"
        />
        <TextInputComponent
          label="Mobile No."
          handleTextInput={handleInput}
          value={site.data.mobile.value}
          element="mobile"
        />

        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.insurance_due_date.value)}
          label="Select Insurance Due Date"
          element="insurance_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.fitness_due_date.value)}
          label="Select Fitness Due Date"
          element="fitness_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.permit_due_date.value)}
          label="Select Permit Due Date"
          element="permit_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.pollution_due_date.value)}
          label="Select Pollution Due Date"
          element="pollution_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.fire_cylinder_due_date.value)}
          label="Select Fire Cylinder Due Date"
          element="fire_cylinder_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.driver_license_due_date.value)}
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

export default EditVehicleSiteScreen;
