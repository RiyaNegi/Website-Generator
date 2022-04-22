import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import HomePage from "../WebsitePages/HomePage";
import { GlobalContext } from "../context/Provider";
import SubPage from "../WebsitePages/ SubPage";
import _ from "lodash";

interface WebsiteGeneratorProps {}

const WebsiteGenerator = ({}: WebsiteGeneratorProps) => {
  const globalStore: any = useContext(GlobalContext);
  const { pageId } = useParams();

  return <SubPage content={globalStore.webData[globalStore.dataIndex!]} />;
};

export default WebsiteGenerator;
