import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import { useEffect } from "react";
import "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";


function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  );
}

export default App;