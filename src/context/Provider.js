import React, { createContext, useReducer, useState, useEffect } from "react";
import { InitialState } from "./InitialState";
import _ from "lodash";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [webData, setWebData] = useState(InitialState.data);
  const [contentId, setContentId] = useState(webData[0].pageId);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataType, setDataType] = useState(webData[0].type);
  const [optionsSelected, setOptionsSelected] = useState([]);

  useEffect(() => {
    setDataIndex(
      _.findIndex(webData, {
        pageId: contentId,
      })
    );
  }, [contentId]);

  useEffect(() => {
    setDataType(() => webData[dataIndex].type);
  }, [dataIndex]);

  const shiftOptionsSelected = () => {
    const copyOptionsSelected = [...optionsSelected];
    copyOptionsSelected.shift();
    setOptionsSelected(copyOptionsSelected);
  };

  const addRemoveOptions = (optionId) => {
    let optionsSelectedArray = [...optionsSelected];
    if (_.includes(optionsSelectedArray, optionId)) {
      let optionIndex = _.findIndex(optionsSelectedArray, optionId);
      optionsSelectedArray.splice(optionIndex, 1);
      setOptionsSelected(optionsSelectedArray);
    } else {
      optionsSelectedArray = optionsSelectedArray.concat(optionId);
      setOptionsSelected(optionsSelectedArray);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        webData: webData,
        contentId: contentId,
        setContentId: setContentId,
        dataIndex: dataIndex,
        dataType: dataType,
        addRemoveOptions: addRemoveOptions,
        optionsSelected: optionsSelected,
        shiftOptionsSelected: shiftOptionsSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
