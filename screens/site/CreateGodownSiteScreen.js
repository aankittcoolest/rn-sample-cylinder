import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputComponent from "../../components/blocks/TextInputComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SaveCancelComponent from "../../components/blocks/SaveCancelComponent";

import DatePickerComponent from "../../components/blocks/DatePickerComponent";

import { useDispatch } from "react-redux";
import * as siteAction from "../../store/actions/siteAction";

const CreateGodownSiteScreen = (props) => {
  let dispatch = useDispatch();
  let dummySite = {
    id: Math.floor(Math.random() * 100),
    site_type_id: 1,
    metadata: {
      title: "Godown Manager",
      label: "godown",
    },
    data: {
      godown_incharge: { key: "Godown Incharge", value: "" },
      mobile: { key: "mobile", value: "" },
      address: { key: "Address", value: "" },
      fire_cylinder_due_date: {
        key: "Fire Cylinder Due Date",
        value: "",
      },
      weighing_cylinder_due_date: {
        key: "Weighing Cylinder Due Date",
        value: "",
      },
      explosive_license_due_date: {
        key: "Explosive License Due Date",
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
          label="Godown Incharge"
          handleTextInput={handleInput}
          element="godown_incharge"
        />
        <TextInputComponent
          label="Mobile"
          handleTextInput={handleInput}
          element="mobile"
        />
        <TextInputComponent
          label="Address"
          handleTextInput={handleInput}
          element="address"
        />

        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Fire Cylinder Due Date"
          element="fire_cylinder_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Weighing Cylinder Due Date"
          element="weighing_cylinder_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date()}
          label="Explosive License Due Date"
          element="explosive_license_due_date"
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

export default CreateGodownSiteScreen;
