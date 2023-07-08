import React, { FC } from "react";
import { RStyleSheet } from "../../../../components/Stylesheet";
import { View } from "react-native";
import { COLORS } from "../../../../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { RootState } from "../../../../store";

type ColumnData = {
  title: string;
  index: number;
};

const mapStateToProps =
  ({ title, index }: ColumnData) =>
  (store: RootState) => {
    const { sheet } = store;
    const { columnsMap } = sheet[title];
    const selectedColumn = Object.entries(
      columnsMap[index].reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;

        return obj[item];
      }, {})
    );

    return selectedColumn;
  };

export const CulumnPieScreen: FC<
  NativeStackScreenProps<RootStackParamList, "SPREADSHEETS_PIE">
> = ({
  route: {
    params: { title, index },
  },
}) => {
  return <View style={styles.wrapper}></View>;
};

const styles = RStyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});
