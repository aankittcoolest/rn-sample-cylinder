import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-material-ui";

import AdminRoleScreen from "./AdminRoleScreen";

const RoleScreen = (props) => {
  const [role, setRole] = useState("home");

  let renderScreen = null;

  const handleRole = (role) => {
    setRole(role);
  };
  if (role === "admin") {
    props.navigation.replace("Admin Dashboard");
  }
  if (role === "godown") {
    props.navigation.replace("Godown Dashboard");
  }
  if (role === "loadman") {
    props.navigation.replace("Loadman Dashboard");
  }

  return (
    <View style={styles.container}>
      <Button raised text="Admin" onPress={() => handleRole("admin")} />
      <Button
        raised
        text="Godown Manager"
        onPress={() => handleRole("godown")}
      />
      <Button raised text="Loadman" onPress={() => handleRole("loadman")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    marginVertical: 150,
  },
});

export default RoleScreen;
