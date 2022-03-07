import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteIndex from "./routes";
import { GlobalProvider } from "./context/Provider";

ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <RouteIndex />
    </BrowserRouter>
  </GlobalProvider>,
  document.getElementById("root")
);
