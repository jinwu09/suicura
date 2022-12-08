import { useState } from "react";
import { createContext } from "react";

export const HomeContext = createContext(null);

export function HomeProvider({ children }) {
  const [toDoFocus, setToDoFocus] = useState("hello");
  return (
    <HomeContext.Provider value={{ toDoFocus, setToDoFocus }}>
      {children}
    </HomeContext.Provider>
  );
}
