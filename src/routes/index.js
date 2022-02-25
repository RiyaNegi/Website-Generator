import App from "../App";
import HomePage from "../WebsitePages/HomePage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteIndex = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/goVegan" element={<HomePage />} />
    </Routes>
  );
};

export default RouteIndex;
