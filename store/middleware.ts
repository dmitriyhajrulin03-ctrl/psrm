// Logger middleware for Zustand stores
// Currently not used but kept for future reference
export const logger = <T extends object>(
  config: any
): any => (set: any, get: any, api: any) =>
  config(
    (...args: any[]) => {
      if (process.env.NODE_ENV === "development") {
        console.log("State update:", args);
      }
      set(...args);
    },
    get,
    api
  );




