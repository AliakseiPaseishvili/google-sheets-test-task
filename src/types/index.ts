import { AxiosResponse } from "axios";

export type ROUTE_NAME = "getSheet";
export type METHOD = "get";

export type ROUTE_MAP = {
  [key in ROUTE_NAME]: {
    url: string;
    method: METHOD;
  };
};

type EndpointsProps = {
  urlKeys: {
    sheetId: string;
  };
};

export type ENDPOINTS_MAP = {
  [key in ROUTE_NAME]: (props: EndpointsProps) => Promise<AxiosResponse<any>>;
};

export type SpreadsheetsItem = {
  properties: {
    title: string;
  }
}

export type Spreadsheets = {
 sheets: SpreadsheetsItem[],
 spreadsheetId: string;
};