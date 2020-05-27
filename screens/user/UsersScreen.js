import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import CardComponent from "../../components/blocks/CardComponent";
import { ActionButton } from "react-native-material-ui";
import Constants from "../../constants/Constants";
import { useSelector, useDispatch } from "react-redux";

import * as userAction from "../../store/actions/userAction";

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
      user_type_id: item.user_type_id,
      metadata: {
        title: item.metadata.title,
        label: item.metadata.label,
        labelColor:
          item.user_type_id === "1"
            ? Constants.labels.primary
            : Constants.labels.success,
      },
      items,
    };
  });
  return formattedData;
};

const UsersScreen = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const [users, setUsers] = useState(mapData(data));

  const handleAdd = () => {
    props.navigation.push("Add User", {
      id: 3,
      onNavigateBack: (user) => handleNewUserAdd(user),
    });
  };
  const handleNewUserAdd = (user) => {
    let data = [];
    data.push(user);
    data = mapData(data);
    let tmpData = users;
    tmpData.push(data[0]);
    setUsers(tmpData);
  };

  const handleOnNavigateBack = (user) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === user.id) {
        data[i] = user;
      }
    }
    setUsers(mapData(data));
  };

  const handleEdit = (userId, userTypeId) => {
    if (userTypeId === 1) {
      return props.navigation.push("Edit Loadman User", {
        id: userId,
        onNavigateBack: handleOnNavigateBack,
      });
    }
    return props.navigation.push("Edit Hawker User", {
      id: userId,
      onNavigateBack: (id) => handleOnNavigateBack(id),
    });
  };

  const handleDelete = (userId) => {
    let updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    dispatch(userAction.deleteUser(userId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <CardComponent
            metadata={item.metadata}
            id={item.id}
            items={item.items}
            handleEdit={() => handleEdit(item.id, item.user_type_id)}
            handleDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <ActionButton {...props} onPress={() => handleAdd()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
});

export default UsersScreen;
