import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import endpoints from "./endpoints";
import axios from "axios";

const App = () => {
  const [sheets, getSheets] = useState(null);
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
  return <View>
    {sheets ? <ActivityIndicator /> : null}
  </View>;
};

export default App;
