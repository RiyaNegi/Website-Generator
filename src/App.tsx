import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <span>Hey there Vegans</span>
      <button className="btn-style">
        <span>
          <Link to="/goVegan">CLICK HERE TO GO TO YOUR WEBSITE!</Link>
        </span>
      </button>
      <Outlet />
    </div>
  );
}

export default App;
