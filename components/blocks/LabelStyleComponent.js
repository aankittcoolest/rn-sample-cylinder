import { StyleSheet } from "react-native";

export const LabelStyle = (labelColor) =>
  StyleSheet.create({
    headingLabel: {
      marginRight: 5,
      color: "#fff",
      backgroundColor: labelColor,
      paddingVertical: 4,
      paddingHorizontal: 8,
      fontSize: 14,
      borderRadius: 5,
    },
  });
