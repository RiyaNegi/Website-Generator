import React, { createContext, useReducer, useState, useEffect } from "react";
import { InitialState } from "./InitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [webData, setWebData] = useState(InitialState.data);
  const [contentId, setContentId] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        webData: webData,
        contentId: contentId,
        setContentId: setContentId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
