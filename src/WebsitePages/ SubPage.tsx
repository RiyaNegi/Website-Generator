import React, { useContext, useState } from "react";
import "./SubPage.css";
import "../App.css";
import { GlobalContext } from "../context/Provider";
import { Link } from "react-router-dom";
import _ from "lodash";

interface SubPageProps {
  content: { payload: { texts: Array<String> | undefined } } | undefined;
}

const SubPage = ({ content }: SubPageProps) => {
  const [check, setCheck] = useState([]);
  const globalStore: any = useContext(GlobalContext);

  const textGenerator = (textArray: Array<String>) => {
    return textArray.map((i) => <span className="text-spn"> {i} </span>);
  };

  const multiSelectGenerator = (
    excusesObject: Array<{
      excuseId: number;
      text: string;
      explanations: Array<{}>;
    }>
  ) => {
    return (
      <div className="options-checkboxes">
        {excusesObject.map((i) => (
          <label className="options-align">
            <input
              key={i.excuseId}
              type="checkbox"
              value={i.excuseId}
              onChange={() => globalStore.addRemoveOptions(i.excuseId)}
              defaultChecked={
                !globalStore.optionsSelected.filter(
                  (i: any) => i === i.excuseId
                )
              }
            />
            {""}
            {i.text}
          </label>
        ))}
      </div>
    );
  };

  const optionsButtonGenerator = (
    btnObject:
      | {
          style: { buttonLayout: string } | undefined;
          text: string;
        }
      | undefined
  ) => {
    return (
      <div className="btn-space">
        <Link
          to={{
            pathname: `/goVegan/pages/${globalStore.contentId}/options/${globalStore.optionsSelected[0]}`,
          }}
        >
          <button key={btnObject?.text} className="btn-style btn-space">
            <span>{btnObject?.text}</span>
          </button>
        </Link>
      </div>
    );
  };

  const buttonGenerator = (
    btnObject:
      | {
          style: { buttonLayout: string } | undefined;
          list: Array<{
            text: string;
            nextPageId: number;
            variable: string;
            value: string;
          }>;
        }
      | undefined
  ) => {
    if (btnObject?.style?.buttonLayout === " vertical") {
      return (
        <div className="vertical-btn btn-space">
          {btnObject.list.map((i: { text: string; nextPageId: number }) => (
            <Link to={{ pathname: `/goVegan/pages/${i.nextPageId}` }}>
              <button
                key={i.text}
                className="btn-style btn-space"
                onClick={() => globalStore.setContentId(i.nextPageId)}
              >
                <span>{i.text}</span>
              </button>
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div className="horizontal-btn">
          {btnObject?.list.map((i: { text: string; nextPageId: number }) => (
            <Link to={{ pathname: `/goVegan/pages/${i.nextPageId}` }}>
              <button
                key={i.text}
                className="btn-style btn-space"
                onClick={() => globalStore.setContentId(i.nextPageId)}
              >
                <span>{i.text}</span>
              </button>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="sub-page">
      {textGenerator(content?.payload.texts!)}
      {console.log("checl", globalStore.optionsSelected, globalStore.dataType)}

      {globalStore.dataType === "SINGLE_QUESTION"
        ? buttonGenerator(
            globalStore.webData[globalStore.dataIndex].payload.buttons
          )
        : globalStore.dataType === "EXCUSE_SELECT" && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {multiSelectGenerator(
                globalStore.webData[globalStore.dataIndex].payload.excuses
              )}
              {optionsButtonGenerator(
                globalStore.webData[globalStore.dataIndex].payload.button
              )}
            </div>
          )}
    </div>
  );
};

export default SubPage;
