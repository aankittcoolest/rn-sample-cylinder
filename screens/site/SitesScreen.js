import React from "react";
import { View, StyleSheet } from "react-native";

import CardComponent from "../../components/blocks/CardComponent";
import { ActionButton } from "react-native-material-ui";

import Constants from "../../constants/Constants";
import { ScrollView } from "react-native-gesture-handler";

const SitesScreen = (props) => {
  let cards = [];
  let data = [
    {
      metadata: {
        id: 1,
        title: "Godown Manager",
        label: "Godown manager",
        labelColor: Constants.labels.primary,
      },
      items: [
        { key: "Godown Incharge", value: "Neeru" },
        { key: "Mobile Number", value: "123456789" },
      ],
    },
  ];

  const handleAdd = () => {
    props.navigation.push("Add Site");
  };

  const handleEdit = (itemId) => {
    //TODO handle itemID here
  };

  const handleDelete = (itemId) => {
    //TODO handle delete item
  };

  data.forEach((x) =>
    cards.push(
      <CardComponent
        metadata={x.metadata}
        items={x.items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    )
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>{cards}</View>
        <View>{cards}</View>
        <View>{cards}</View>
        <View>{cards}</View>
        <View>{cards}</View>
        <View>{cards}</View>
      </ScrollView>
      <ActionButton onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SitesScreen;
