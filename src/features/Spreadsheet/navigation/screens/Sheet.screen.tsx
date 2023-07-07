import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Row } from "../../components/Row";
import React, { FC } from "react";
import { RootStackParamList } from "../types";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { RStyleSheet } from "../../../../components/Stylesheet";
import { COLORS } from "../../../../constants/colors";

import { useGetSheetData } from "../../hooks/useGetSheetData";

export const SheetScreen: FC<
  NativeStackScreenProps<RootStackParamList, "SPREADSHEETS_SHEET">
> = ({
  route: {
    params: { title, sheetId },
  },
}) => {

  const { sheetData, arrayLength } = useGetSheetData(sheetId, title);

  return (
    <ScrollView horizontal={true} style={styles.wrapper}>
      <FlatList
        data={sheetData}
        keyExtractor={(item, index) =>
          item.reduce(
            (finalSting: string, string: string) => finalSting + string,
            ""
          ) + index
        }
        renderItem={({ item }) => <Row data={item} arrayLength={arrayLength} />}
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
});
