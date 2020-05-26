import React, { useState } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";

import PickerComponent from "../../components/blocks/PickerComponent";
import CreateGodownSiteScreen from "./CreateGodownSiteScreen";
import CreateVehicleSiteScreen from "./CreateVehicleSiteScreen";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import HeaderComponent from "../../components/blocks/HeaderComponent";

const CreateSiteScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("1");
  let items = [
    { label: "Site", value: "1" },
    { label: "Godown", value: "2" },
  ];

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

  let renderComponent =
    selectedValue === "1" ? (
      <CreateVehicleSiteScreen {...props} />
    ) : (
      <CreateGodownSiteScreen />
    );
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <HeaderComponent name="Create Site" />
        <View style={styles.container}>
          <PickerComponent
            label="Select Site Type"
            items={items}
            selectedValue={selectedValue}
            handleSelectedValue={handleSelectedValue}
          />
          {renderComponent}
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

export default CreateSiteScreen;
