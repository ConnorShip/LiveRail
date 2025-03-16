import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Map from "./resources/cleanSVG";
import TrainStatus from "./components/TrainStatus/trainStatus";
import LoadScreen from "./components/Loader/loading";
import "./App.css";

function App() {
  const [lineName, setLineName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return isLoading ? (
    <LoadScreen />
  ) : (
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
