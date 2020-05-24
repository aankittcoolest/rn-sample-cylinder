import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Constants from "../../constants/Constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

const DatePickerComponent = (props) => {
  const [date, setDate] = useState(props.date);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    props.handleDate(currentDate);
  };

  const showDatepicker = () => {
    setMode("date");
    setShow(true);
  };

  let datePicker = null;
  if (show) {
    datePicker = (
      <DateTimePicker value={date} mode={mode} onChange={onChange} />
    );
  }

  return (
    <View>
      <Text style={styles.textLabel}>{props.label}</Text>
      <Text style={styles.textInput} onPress={showDatepicker}>
        {date.toDateString()}
      </Text>
      {datePicker}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLabel: {
    fontSize: 18,
    color: Constants.itemLabelsColor,
    marginTop: 10,
    marginBottom: 25,
  },
  textInput: {
    fontSize: 20,
    height: 40,
    paddingLeft: 6,
    borderBottomWidth: 0.2,
    color: Constants.secondaryColor,
  },
});

export default DatePickerComponent;
