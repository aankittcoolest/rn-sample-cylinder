import { StyleSheet } from "react-native";

export const LabelStyle = (labelColor, fontSize) =>
  StyleSheet.create({
    headingLabel: {
      color: "#fff",
      backgroundColor: labelColor,
      paddingHorizontal: 13,
      paddingVertical: 3,
      fontSize: fontSize,
      borderRadius: 10,
      fontFamily: "open-sans",
    },
  });
