import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteIndex from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <RouteIndex />
  </BrowserRouter>,
  document.getElementById("root")
);
