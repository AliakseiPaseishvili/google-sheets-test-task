import React, { FC } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
}

export const Button: FC<ButtonProps> = ({ text, children, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      {text ? <Text>{text}</Text> : children}
    </TouchableOpacity>
  );
};
