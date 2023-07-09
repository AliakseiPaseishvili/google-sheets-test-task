import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import endpoints from "../../../endpoints";
import { saveSheetValues } from "../../../store/slices/sheet.slice";
import { RootState } from "../../../store";

const mapStateToProps = (title: string) => (store: RootState) => {
  const { sheet } = store;

  return sheet[title] ?? {};
};

/*
  using setInterval is only working solution for getting data from google-spreadsheets, as it doesn't support websockets. Google app script doesn't support it too.
*/
export const useGetSheetData = (sheetId: string | undefined, title: string) => {
  const { values, arrayLength } = useSelector(mapStateToProps(title), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    const getSheetData = async () => {
      try {
        if (sheetId) {
          const result = await endpoints.getSheetData({
            urlKeys: {
              sheetId,
              sheetName: title,
            },
          });
          const { values } = result.data;
          const arrayLength = Math.max(...values.map((array) => array.length));

          dispatch(
            saveSheetValues({
              values,
              arrayLength,
              title,
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(async () => getSheetData(), 10000);
    
    return () => clearInterval(interval);
  }, [sheetId]);

  return { sheetData: values, arrayLength };
};
