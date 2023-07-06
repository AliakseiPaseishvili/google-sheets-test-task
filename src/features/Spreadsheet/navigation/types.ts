import { ROUTES } from "../../../constants/routes";

export type RootStackParamList = {
  [ROUTES.SPREADSHEETS.MAIN]: undefined;
  [ROUTES.SPREADSHEETS.SHEET]: { title: string; sheetId: string | undefined };
};