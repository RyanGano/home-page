import { createContext, useContext } from "react";

interface TechInfoContextValue {
  showTech: boolean;
  toggleTech: () => void;
}

export const TechInfoContext = createContext<TechInfoContextValue>({
  showTech: false,
  toggleTech: () => {},
});

export function useTechInfo() {
  return useContext(TechInfoContext);
}
