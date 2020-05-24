import React from "react";
import { View, Picker, Text, StyleSheet } from "react-native";
import Constants from "../../constants/Constants";

const PickerComponent = (props) => {
  let items = [];
  props.items.forEach((x) =>
    items.push(<Picker.Item label={x.label} value={x.value} key={x.value} />)
  );
  return (
    <View>
      <Text style={styles.textLabel}>{props.label}</Text>
      <Picker
        style={styles.picker}
        selectedValue={props.selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          props.handleSelectedValue(itemValue)
        }
      >
        {items}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 18,
    color: Constants.itemLabelsColor,
  },
  picker: {
    color: Constants.secondaryColor,
    transform: [{ scaleY: 1.2 }],
  },
});

export default PickerComponent;
