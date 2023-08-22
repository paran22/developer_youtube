import { createContext, useContext } from "react";
import Api from "../api/api";

const ApiContext = createContext();

const api = new Api();

export function ApiContextProvider({ children }) {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
}

export const useApiContext = () => useContext(ApiContext);
