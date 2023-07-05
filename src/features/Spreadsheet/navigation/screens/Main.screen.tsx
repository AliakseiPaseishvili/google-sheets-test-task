import React, { useEffect, useState } from "react";
import endpoints from "../../../../endpoints";
import { ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "../../../../components/ListItem";
import { RStyleSheet } from "../../../../components/Stylesheet";
import { COLORS } from "../../../../constants/colors";

export const MainScreen = () => {
  const [sheetsData, getSheets] = useState(null);
  useEffect(() => {
    const func = async () => {
      try {
        const result = await endpoints.getSheet({
          urlKeys: {
            sheetId: "17FXJ_St91eMQ7Fc3zO4YMMhfzixG5g2wq0a3Mk77XsE",
          },
        });

        getSheets(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return (
    <FlatList
      style={styles.wrapper}
      data={sheetsData?.sheets}
      keyExtractor={({ properties: { title } }) => title}
      renderItem={({ item: { properties: { title } = {} } }) => (
        <ListItem text={title} />
      )}
      ListEmptyComponent={!sheetsData && <ActivityIndicator />}
    />
  );
};

const styles = RStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
