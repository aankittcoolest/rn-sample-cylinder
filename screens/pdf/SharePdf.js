import React from "react";
import * as FileSystem from "expo-file-system";
import { View, Button } from "react-native";
import * as Sharing from "expo-sharing";

const SharePdf = () => {
  const onShare = async () => {
    const callback = (downloadProgress) => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
      this.setState({
        downloadProgress: progress,
      });
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      "http://www.africau.edu/images/default/sample.pdf",
      FileSystem.documentDirectory + "sample.pdf",
      {},
      callback
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      Sharing.shareAsync(uri);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Generate and print Challan" />
    </View>
  );
};

export default SharePdf;
