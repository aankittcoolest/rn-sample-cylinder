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

const EditGodownSiteScreen = (props) => {
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
        <TextInputComponent
          label="Godown Incharge"
          handleTextInput={handleInput}
          value={site.data.godown_incharge.value}
          element="godown_incharge"
        />
        <TextInputComponent
          label="Mobile"
          handleTextInput={handleInput}
          value={site.data.mobile.value}
          element="mobile"
        />
        <TextInputComponent
          label="Address"
          handleTextInput={handleInput}
          value={site.data.address.value}
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
          date={new Date(site.data.weighing_cylinder_due_date.value)}
          label="Weighing Cylinder Due Date"
          element="weighing_cylinder_due_date"
        />
        <DatePickerComponent
          handleDate={handleInput}
          date={new Date(site.data.explosive_license_due_date.value)}
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

export default EditGodownSiteScreen;
