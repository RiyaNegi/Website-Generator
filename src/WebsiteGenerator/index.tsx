import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HomePage from "../WebsitePages/HomePage";
import { GlobalContext } from "../context/Provider";
import SubPage from "../WebsitePages/ SubPage";

interface WebsiteGeneratorProps {}

const WebsiteGenerator = ({}: WebsiteGeneratorProps) => {
  const globalStore: any = useContext(GlobalContext);
  const { pageId } = useParams();

  return pageId === "0" ? (
    <HomePage content={globalStore.webData[pageId]} />
  ) : (
    parseInt(pageId!) > 0 && <SubPage content={globalStore.webData[pageId!]} />
  );
};

export default WebsiteGenerator;
