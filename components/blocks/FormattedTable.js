import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

import Constants from "../../constants/Constants";

const FormattedTable = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tableName}>{props.tableName}</Text>
      <Table
        borderStyle={{ borderWidth: 1, borderColor: Constants.primaryColor }}
      >
        <Row
          data={props.headers}
          style={styles.HeadStyle}
          textStyle={styles.TableHeaderText}
        />
        <Rows data={props.data} textStyle={styles.TableText} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  tableName: {
    fontSize: 18,
    color: Constants.itemLabelsColor,
    paddingBottom: 10,
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: Constants.primaryColor,
  },
  TableText: {
    margin: 10,
    fontSize: 18,
    color: Constants.secondaryColor,
  },
  TableHeaderText: {
    margin: 10,
    color: "white",
    fontSize: 18,
  },
});

export default FormattedTable;
