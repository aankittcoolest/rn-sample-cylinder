import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import CardComponent from "../../components/blocks/CardComponent";
import { ActionButton } from "react-native-material-ui";

import Constants from "../../constants/Constants";

import { useSelector } from "react-redux";

const mapData = (data) => {
  let formattedData = data.map((item) => {
    let keys = Object.keys(item.data);
    let items = [];
    for (let i = 0; i < keys.length; i++) {
      items.push({
        key: item.data[keys[i]].key,
        value: item.data[keys[i]].value,
      });
    }
    return {
      id: item.id,
      metadata: {
        title: item.metadata.title,
        label: item.metadata.label,
        labelColor:
          item.site_type_id === 1
            ? Constants.labels.primary
            : Constants.labels.success,
      },
      items,
    };
  });
  return formattedData;
};
const SitesScreen = (props) => {
  let data = useSelector((state) => state.sites.sites);
  const [sites, setSites] = useState(mapData(data));

  const handleOnNavigateBack = (foo) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === foo.id) {
        data[i] = foo;
      }
    }
    setSites(mapData(data));
  };

  const handleNewSiteAdd = (site) => {
    let data = [];
    data.push(site);
    data = mapData(data);
    let tmpData = sites;
    tmpData.push(data[0]);
    setSites(tmpData);
  };

  const handleAdd = () => {
    props.navigation.push("Add Site", {
      id: 3,
      onNavigateBack: (site) => handleNewSiteAdd(site),
    });
  };

  const handleEdit = (itemId, siteTypeId) => {
    if (siteTypeId === "1") {
      props.navigation.push("Edit Godown Site", {
        id: itemId,
        onNavigateBack: handleOnNavigateBack,
      });
    }
    props.navigation.push("Edit Vehicle Site", {
      id: itemId,
      onNavigateBack: (id) => handleOnNavigateBack(id),
    });
    //TODO handle itemID here
  };

  const handleDelete = (itemId) => {
    //TODO handle delete item
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sites}
        renderItem={({ item }) => (
          <CardComponent
            metadata={item.metadata}
            id={item.id}
            items={item.items}
            handleEdit={() => handleEdit(item.id, item.site_type_id)}
            handleDelete={handleDelete}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <ActionButton {...props} onPress={handleAdd} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
});

export default SitesScreen;
