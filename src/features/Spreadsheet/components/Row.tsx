import React, { FC, useMemo } from "react";
import { Row as RNRow } from "react-native-reanimated-table";
import { RStyleSheet } from "../../../components/Stylesheet";
import { COLORS } from "../../../constants/colors";

export type RowProps = {
  data: string[];
  arrayLength: number;
};

export const Row: FC<RowProps> = ({ data, arrayLength }) => {
  const rowData = useMemo(
    () => [...data, ...new Array(arrayLength - data.length).fill("")],
    [data, arrayLength]
  );
  return (
    <RNRow
      data={rowData}
      widthArr={rowData.map(() => 80)}
      style={styles.rowStyle}
      textStyle={styles.textStyle}
      borderStyle={styles.borderStyle}
    />
  );
};

const styles = RStyleSheet.create({
  rowStyle: {
    height: 40,
  },
  textStyle: {
    textAlign: "center",
    backgroundColor: "red",
  },
  borderStyle: { borderWidth: 1, borderColor: COLORS.border },
});
