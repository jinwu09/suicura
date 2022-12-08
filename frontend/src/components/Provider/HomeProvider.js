import { useState } from "react";
import { createContext } from "react";

export const HomeContext = createContext(null);

export function HomeProvider({ children }) {
  const [todonam, setToDoNam] = useState("hello");
  return (
    <HomeContext.Provider value={{ todonam, setToDoNam }}>
      {children}
    </HomeContext.Provider>
  );
}
