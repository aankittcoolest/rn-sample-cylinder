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

const EditHawkerUserScreen = (props) => {
  let loadmans = useSelector((state) => state.loadmans);

  loadmans = loadmans.map(
    (item) => (item = { label: item.name, value: item.user_id })
  );

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.users.filter((x) => x.id === props.route.params.id)[0]
  );

  const getLoadmanIdByLoadmanName = (loadmanName) => {
    let currenLoadman = loadmans.filter(
      (loadman) => loadman.label === loadmanName
    )[0];
    return currenLoadman.value;
  };

  const [user, setUser] = useState(data);
  const [loadmanId, setLoadmanId] = useState(
    getLoadmanIdByLoadmanName(user.data.loadman.value)
  );

  const handleCancel = () => {
    props.navigation.goBack();
  };

  const handleSave = () => {
    dispatch(userActions.editUser(user));
    props.route.params.onNavigateBack(user);
    props.navigation.goBack();
  };

  const handleSelectedValue = (loadmanId) => {
    let selectedLoadman = loadmans.filter(
      (item) => item.value === loadmanId
    )[0];
    user.data.loadman.value = selectedLoadman.label;
    setUser(user);
    setLoadmanId(loadmanId);
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
          label="Attached to Loadman"
          items={loadmans}
          selectedValue={loadmanId}
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

export default EditHawkerUserScreen;
