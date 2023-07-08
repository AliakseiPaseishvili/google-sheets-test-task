import React from "react";
import { RStyleSheet } from "../../../../components/Stylesheet";
import { View } from "react-native";

export const CulumnPieScreen = () => {
  return <View style={styles.wrapper}></View>;
};

const styles = RStyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
