import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const DetailScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{props.route.params.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
