import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Row } from "../../components/Row";
import React, { FC, useMemo } from "react";
import { RootStackParamList } from "../types";
import { ActivityIndicator, Dimensions, FlatList, ScrollView } from "react-native";
import { RStyleSheet, px2dp } from "../../../../components/Stylesheet";
import { COLORS } from "../../../../constants/colors";

import { useGetSheetData } from "../../hooks/useGetSheetData";
import { TableHeader } from "../../components/TableHeader";

export const SheetScreen: FC<
  NativeStackScreenProps<RootStackParamList, "SPREADSHEETS_SHEET">
> = ({
  route: {
    params: { title, sheetId },
  },
}) => {

  const { sheetData, arrayLength } = useGetSheetData(sheetId, title);

  const widthArr = useMemo(() => new Array(arrayLength).fill(px2dp(80)) ,[arrayLength]);

  return (
    <ScrollView horizontal={true} style={styles.wrapper}>
      <FlatList
        style={styles.flatList}
        data={sheetData}
        ListHeaderComponent={<TableHeader title={title} />}
        keyExtractor={(item, index) =>
          item.reduce(
            (finalSting: string, string: string) => finalSting + string,
            ""
          ) + index
        }
        renderItem={({ item }) => <Row widthArr={widthArr} data={item} arrayLength={arrayLength} />}
        ListEmptyComponent={() => !sheetData && <ActivityIndicator />}
        initialNumToRender={18}
      />
    </ScrollView>
  );
};

const styles = RStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatList: {
    flex: 1,
    minWidth: Dimensions.get('window').width,
  },
});
