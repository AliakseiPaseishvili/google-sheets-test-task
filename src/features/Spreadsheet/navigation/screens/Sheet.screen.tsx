import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Row } from "../../components/Row";
import React, { FC, useEffect, useMemo, useState } from "react";
import { RootStackParamList } from "../types";
import endpoints from "../../../../endpoints";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { RStyleSheet } from "../../../../components/Stylesheet";
import { COLORS } from "../../../../constants/colors";

export const SheetScreen: FC<
  NativeStackScreenProps<RootStackParamList, "SPREADSHEETS_SHEET">
> = ({
  route: {
    params: { title, sheetId },
  },
}) => {
  const [sheetData, setSheetData] = useState<string[][]>([]);
  useEffect(() => {
    const func = async () => {
      try {
        if (sheetId) {
          const result = await endpoints.getSheetData({
            urlKeys: {
              sheetId,
              sheetName: title,
            },
          });
          setSheetData(result.data.values);
        }
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, [sheetId]);

  const arrayLength = useMemo(
    () => Math.max(...sheetData.map((array) => array.length)),
    [sheetData]
  );

  return (
    <ScrollView horizontal={true} style={styles.wrapper}>
      <FlatList
        data={sheetData}
        keyExtractor={(item, index) =>
          item.reduce((finalSting: string, string: string) => finalSting + string, "") + index
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
