import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

// initialState
const initialState = {
  seeAmount: false,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // logic to view amount
  const seeTotalFunc = () => {
    dispatch({ type: "TOTAL_SAVINGS" });
  };

  // show registration modal

  return (
    <AppContext.Provider value={{ ...state, seeTotalFunc }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
