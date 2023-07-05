import { ROUTES } from "./routes";
import axios from "axios";
import { changeUrlKeys } from "../helpers";
import { API_KEY } from "@env";

const endpoints = {};

Object.keys(ROUTES).forEach((key) => {
  const { url, method } = ROUTES[key];

  endpoints[key] = ({ urlKeys, ...args } = {}) => {
    const finalURL = `${changeUrlKeys(url, urlKeys)}?key=${API_KEY}`;
    return axios[method](
      finalURL,
      args
    ).catch((err) => {
      console.log(err);

      throw err;
    });
  };
});

export default endpoints;
