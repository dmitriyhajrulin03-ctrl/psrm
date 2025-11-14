import { Middleware } from "zustand";

export const logger: Middleware = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log("State update:", args);
      set(...args);
    },
    get,
    api
  );




