import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import FormattedTable from "../../blocks/FormattedTable";
import { Button } from "react-native-material-ui";

import adminStockData from "../../../data/admin-stock-data";
import loadmanStockData from "../../../data/loadman-stock-data";

const getImage = (imageId) => {
  switch (imageId) {
    case 0:
      return require("../../../assets/images/filled.png");
    default:
      return require("../../../assets/images/empty.png");
  }
};

const generateButtonForReceive = (imageId, receivedCount) => {
  if (imageId === 0) {
    return <Button raised primary text={receivedCount} />;
  }
  return receivedCount;
};

const generateButtonForIssue = (imageId, issuedCount) => {
  if (imageId === 1) {
    return <Button raised primary text={issuedCount} />;
  }
  return issuedCount;
};

const StockComponent = (props) => {
  let data = [];
  
  let stockData = adminStockData

  stockData.data.forEach((item) => {
    data.push([
      <View style={styles.item}>
        <Image
          source={getImage(item.imageId)}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text style={styles.weight}>{item.size}</Text>
      </View>,
      "1100",
      generateButtonForReceive(item.imageId, item.receivedCount),
      generateButtonForIssue(item.imageId, item.issuedCount),
      "500",
    ]);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Inventory</Text>
      <FormattedTable headers={stockData.headers} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    paddingLeft: 15,
    marginBottom: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    color: "#706b6b",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  weight: {
    paddingTop: 5,
  },
});

export default StockComponent;
