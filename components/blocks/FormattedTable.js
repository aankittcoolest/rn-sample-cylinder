import React from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

import Constants from "../../constants/Constants";

const FormattedTable = (props) => {
  return (
    <View style={styles.container}>
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
  container: {
    marginHorizontal: 10,
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: Constants.primaryColor,
  },
  TableText: {
    margin: 10,
    fontSize: 15,
  },
  TableHeaderText: {
    margin: 10,
    color: "white",
    fontSize: 15,
  },
});

export default FormattedTable;
