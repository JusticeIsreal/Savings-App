import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = createContext();
const initialState = {
  seeAmount: false,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // logic to view amount
  const seeTotalFunc = () => {
    dispatch({ type: "TOTAL_SAVINGS" });
  };

  return (
    <AppContext.Provider value={{ ...state, seeTotalFunc }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
