import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./screens/Main.screen";

const Stack = createNativeStackNavigator();

export const SpreadSheetStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={MainScreen} />
  </Stack.Navigator>
);
