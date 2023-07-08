import React, { FC } from "react";
import { RStyleSheet } from "../../../components/Stylesheet";
import { COLORS } from "../../../constants/colors";
import { Button } from "../../../components/Button";
import { TRANSLATIONS } from "../../../constants/translations";
import { View } from "react-native";
import { RootState } from "../../../store";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants/routes";
import { RootStackParamList } from "../navigation/types";

interface TableHeaderProps {
  title: string;
}

const mapStateToProps = (title: string) => (store: RootState) => {
  const { sheet } = store;

  const { arrayLength } = sheet[title] || {};

  return arrayLength
    ? new Array(arrayLength).fill("").map((_, index) => index)
    : [];
};

export const TableHeader: FC<TableHeaderProps> = ({ title }) => {
  const headerArray = useSelector(mapStateToProps(title), shallowEqual);
  const navigation = useNavigation();
  return (
    <View style={styles.rowStyle}>
      {headerArray.map((item) => (
        <View style={styles.cell} key={item}>
          <Button
            onPress={() => navigation.navigate(ROUTES.SPREADSHEETS.PIE)}
            style={styles.button}
            textStyle={styles.buttonText}
            text={TRANSLATIONS.SHEET_SHOW_PIE}
          />
        </View>
      ))}
    </View>
  );
};

const styles = RStyleSheet.create({
  rowStyle: {
    flexDirection: "row",
  },
  cell: {
    height: 40,
    width: 80,
    borderRightWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.backgroundAlternative,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: COLORS.textAlternative,
    fontSize: 10,
  },
});
