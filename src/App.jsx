import { useState } from "react";
import Header from "./components/Searchbar/header";
import Map from "./resources/cleanSVG";
import TrainStatus from "./components/TrainStatus/trainStatus";
import "./App.css";

function App() {
  const [lineName, setLineName] = useState("");

  return (
    <>
      <Header setLineName={setLineName} />
      <div id="Main">
        <Map id="map" />
        <TrainStatus lineName={lineName} />
      </div>
    </>
  );
}

export default App;
