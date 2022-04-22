import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./OptionsPage.css";

const OptionsPage = () => {
  const globalStore: any = useContext(GlobalContext);
  const [iterator, setIterator] = useState(0);
  const { optionId } = useParams();

  const textGenerator = (textArray: Array<String>) => {
    return textArray.map((i) => <span className="text-spn"> {i} </span>);
  };

  const dataIndex = _.findIndex(
    globalStore.webData[globalStore.dataIndex].payload.excuses,
    { excuseId: globalStore.optionsSelected[0] }
  );

  const currentData =
    globalStore.webData[globalStore.dataIndex].payload.excuses[dataIndex];

  const buttonGenerator = (
    btnObject:
      | Array<{
          status: string | undefined;
          text: string;
        }>
      | undefined
  ) => {
    return (
      <div className="horizontal-btn">
        {btnObject?.map((i: { text: string; status: string | undefined }) => {
          if (i.status === "DISCARDED") {
            return (
              <button
                key={i.text}
                className="btn-style btn-space"
                onClick={() => globalStore.shiftOptionsSelected()}
              >
                <span>{i.text}</span>
              </button>
            );
          } else {
            return (
              <button
                key={i.text}
                className="btn-style btn-space"
                onClick={() => setIterator(iterator + 1)}
              >
                <span>{i.text}</span>
              </button>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="options-page">
      {console.log("Checl", currentData, dataIndex)}
      You chose : {currentData.text}
      {textGenerator(currentData.explanations[iterator].texts)}
      {buttonGenerator(currentData.explanations[iterator].possibleReplies)}
    </div>
  );
};

export default OptionsPage;
