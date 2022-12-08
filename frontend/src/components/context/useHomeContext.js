import { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContext");
  }
  return context;
};
