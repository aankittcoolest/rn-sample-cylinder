import React from "react";
import { View, Button } from "react-native";

const DebugComponent = (props) => {
  return (
    <View>
      <Button onPress={() => props.navigation.push("Maintain")} title="sites" />
    </View>
  );
};

export default DebugComponent;
