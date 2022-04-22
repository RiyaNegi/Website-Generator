import App from "../App";
import HomePage from "../WebsitePages/HomePage";
import WebsiteGenerator from "../WebsiteGenerator";
import OptionsPage from "../WebsitePages/OptionsPage";

import { Routes, Route } from "react-router-dom";

const RouteIndex = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/goVegan/pages/:pageId" element={<WebsiteGenerator />} />
      <Route
        path="/goVegan/pages/:pageId/options/:optionId"
        element={<OptionsPage />}
      />
    </Routes>
  );
};

export default RouteIndex;
