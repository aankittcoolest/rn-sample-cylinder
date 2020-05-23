import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const FormattedTable = (props) => {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#d8d3d4" }}>
        <Row
          data={props.headers}
          style={styles.HeadStyle}
          textStyle={styles.TableText}
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
    backgroundColor: "#d8d3d4",
  },
  TableText: {
    margin: 10,
  },
});

export default FormattedTable;
