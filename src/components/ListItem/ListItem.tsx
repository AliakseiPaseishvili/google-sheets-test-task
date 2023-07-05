import React, { FC } from "react";
import { Text } from "react-native";
import { RStyleSheet } from "../Stylesheet";
import { COLORS } from "../../constants/colors";
import { Button } from "../Button";

type ListItemProps = {
  onPress?: () => void;
  text?: string;
};

export const ListItem: FC<ListItemProps> = ({ onPress, text }) => {
  return (
    <Button style={styles.wrapper} onPress={onPress} disabled={!onPress}>
      <Text>{text}</Text>
    </Button>
  );
};

const styles = RStyleSheet.create({
  wrapper: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  }
});
