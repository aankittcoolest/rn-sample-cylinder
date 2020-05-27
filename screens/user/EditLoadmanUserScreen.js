import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/blocks/TextInputComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import DatePickerComponent from "../../components/blocks/DatePickerComponent";
import { useSelector, useDispatch } from "react-redux";
import PickerComponent from "../../components/blocks/PickerComponent";

import * as userActions from "../../store/actions/userAction";

const EditLoadmanUserScreen = (props) => {
  let vehicles = useSelector((state) => state.vehicles);

  vehicles = vehicles.map(
    (item) => (item = { label: item.vehicle_number, value: item.site_id })
  );

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.users.filter((x) => x.id === props.route.params.id)[0]
  );

  const getSiteIdByVehicleNumber = (vehicleNumber) => {
    let currentVehicle = vehicles.filter(
      (vehicle) => vehicle.label === vehicleNumber
    )[0];
    return currentVehicle.value;
  };

  const [user, setUser] = useState(data);
  const [siteId, setSiteId] = useState(
    getSiteIdByVehicleNumber(user.data.vehicle_number.value)
  );

  const handleCancel = () => {
    props.navigation.goBack();
  };

  const handleSave = () => {
    dispatch(userActions.editUser(user));
    props.route.params.onNavigateBack(user);
    props.navigation.goBack();
  };

  const handleSelectedValue = (siteId) => {
    let selectedVehicle = vehicles.filter((item) => item.value === siteId)[0];
    user.data.vehicle_number.value = selectedVehicle.label;
    setUser(user);
    setSiteId(siteId);
  };

  const handleInput = (element, text) => {
    if (text instanceof Date) {
      user.data[element].value = text.toDateString();
    } else {
      user.data[element].value = text;
    }
    setUser(user);
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <TextInputComponent
          label="Name"
          handleTextInput={handleInput}
          value={user.data.name.value}
          element="name"
        />
        <PickerComponent
          label="Vehicle No."
          items={vehicles}
          selectedValue={siteId}
          handleSelectedValue={handleSelectedValue}
        />
        <TextInputComponent
          label="Address"
          handleTextInput={handleInput}
          value={user.data.address.value}
          element="address"
        />

        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(user.data.date_of_birth.value)}
          label="Select DOB:"
          element="date_of_birth"
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

export default EditLoadmanUserScreen;
