import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Fragment, useEffect } from "react";
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";

function App() {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
