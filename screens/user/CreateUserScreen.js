import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";

import PickerComponent from "../../components/blocks/PickerComponent";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/blocks/TextInputComponent";
import DatePickerComponent from "../../components/blocks/DatePickerComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import HeaderComponent from "../../components/blocks/HeaderComponent";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import { useSelector, useDispatch } from "react-redux";

import * as userAction from "../../store/actions/userAction";

const CreateUserScreen = (props) => {
  let dispatch = useDispatch();

  let dummyUser = {
    id: Math.ceil(Math.random() * 100).toString(),
    user_type_id: "1",
    metadata: {
      title: "",
      label: "loadman",
    },
    data: {
      name: { key: "Name", value: "" },
      address: { key: "Address", value: "" },
      mobile: { key: "Mobile", value: "" },
      date_of_birth: {
        key: "DOB:",
        value: "",
      },
    },
  };

  let vehicles = useSelector((state) =>
    state.vehicles.map(
      (vehicle) =>
        (vehicle = { label: vehicle.vehicle_number, value: vehicle.site_id })
    )
  );
  let loadmans = useSelector((state) =>
    state.loadmans.map(
      (loadman) => (loadman = { label: loadman.name, value: loadman.user_id })
    )
  );

  const [userType, setUserType] = useState("1");
  const [vehicleNumber, setVehicleNumber] = useState(vehicles[0].label);
  const [loadman, setLoadman] = useState("");
  const [user, setUser] = useState(dummyUser);
  let userTypes = [
    { label: "Loadman", value: "1" },
    { label: "Hawker", value: "2" },
  ];

  const handleUserType = (value) => {
    dummyUser.user_type_id = value;
    if (value === "1") {
      setVehicleNumber(vehicles[0].label);
    } else {
      setLoadman(loadmans[0].label);
    }
    setUserType(value);
  };

  const handleSave = () => {
    if (vehicleNumber) {
      user.data.vehicle_number = { key: "Vehicle No.", value: vehicleNumber };
    }
    if (loadman) {
      user.data.loadman = { key: "Loadman", value: loadman };
    }
    user.metadata.title = user.data.name.value;
    dispatch(userAction.addUser(user));
    props.route.params.onNavigateBack(user);
    props.navigation.goBack();
  };

  const handleCancel = () => {
    props.navigation.goBack();
  };

  const handleInput = (element, text) => {
    if (text instanceof Date) {
      user.data[element].value = text.toDateString();
    } else {
      user.data[element].value = text;
    }
    setUser(user);
  };

  const handleVehicleNumber = (value) => {
    let selectedVehicle = vehicles.filter(
      (vehicle) => vehicle.value === value
    )[0];
    setVehicleNumber(selectedVehicle.label);
    setLoadman("");
  };

  const handleLoadman = (value) => {
    let selectedLoadman = loadmans.filter(
      (loadman) => loadman.value === value
    )[0];
    setLoadman(selectedLoadman.label);
    setVehicleNumber("");
  };

  let renderDropDown = "";
  if (userType === "1") {
    renderDropDown = (
      <PickerComponent
        label="Select Vehicle No."
        items={vehicles}
        selectedValue=""
        handleSelectedValue={handleVehicleNumber}
      />
    );
  } else {
    renderDropDown = (
      <PickerComponent
        label="Select Loadman"
        items={loadmans}
        selectedValue=""
        handleSelectedValue={handleLoadman}
      />
    );
  }

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <HeaderComponent name="Create User" />
        <View style={styles.container}>
          <PickerComponent
            label="Select User Type"
            items={userTypes}
            selectedValue={userType}
            handleSelectedValue={handleUserType}
          />

          <View>{renderDropDown}</View>

          <TextInputComponent
            label="Name"
            handleTextInput={handleInput}
            element="name"
          />

          <TextInputComponent
            label="Address"
            handleTextInput={handleInput}
            element="address"
          />

          <TextInputComponent
            label="Mobile"
            handleTextInput={handleInput}
            element="mobile"
          />

          <DatePickerComponent
            handleDate={handleInput}
            date={new Date()}
            label="Select DOB"
            element="date_of_birth"
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

export default CreateUserScreen;
