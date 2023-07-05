import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SpreadSheetStack } from "./features/Spreadsheet";

const App = () => {

  return <NavigationContainer>
    <SpreadSheetStack />
  </NavigationContainer>
  
};

export default App;
