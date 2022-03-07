import App from "../App";
import HomePage from "../WebsitePages/HomePage";
import WebsiteGenerator from "../WebsiteGenerator";
import { Routes, Route } from "react-router-dom";

const RouteIndex = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/goVegan/pages/:pageId" element={<WebsiteGenerator />} />
    </Routes>
  );
};

export default RouteIndex;
