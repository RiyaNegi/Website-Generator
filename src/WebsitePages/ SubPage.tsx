import React, { useContext } from "react";
import "./SubPage.css";
import "../App.css";
import { GlobalContext } from "../context/Provider";
import { Link } from "react-router-dom";

interface SubPageProps {
  content: { payload: { texts: Array<String> | undefined } } | undefined;
}

const SubPage = ({ content }: SubPageProps) => {
  const globalStore: any = useContext(GlobalContext);
  return (
    <div className="sub-page">
      <span>{content?.payload.texts}</span>
      <div>
        <Link to={`/goVegan/pages/${globalStore.contentId - 1}`}>
          <button
            className="btn-style"
            onClick={() => globalStore.setContentId(globalStore.contentId - 1)}
          >
            <span> Back</span>
          </button>
        </Link>
        <Link to={`/goVegan/pages/${globalStore.contentId + 1}`}>
          <button
            className="btn-style"
            onClick={() => globalStore.setContentId(globalStore.contentId + 1)}
          >
            <span> Continue</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubPage;
