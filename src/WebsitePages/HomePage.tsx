import React, { useContext } from "react";
import "./HomePage.css";
import "../App.css";
import { GlobalContext } from "../context/Provider";
import { Link } from "react-router-dom";

interface HomePageProps {
  content: { payload: { texts: Array<String> | undefined } } | undefined;
}

const HomePage = ({ content }: HomePageProps) => {
  const globalStore: any = useContext(GlobalContext);

  return (
    <div className="home-pg">
      <span>{content?.payload.texts}</span>
      <Link to={`/goVegan/pages/${globalStore.contentId + 1}`}>
        <button
          className="btn-style"
          onClick={() => globalStore.setContentId(globalStore.contentId + 1)}
        >
          <span> Continue</span>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
