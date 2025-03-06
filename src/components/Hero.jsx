import Map from "./Map";
import TrainStatus from "./LineInfo";
import "./Hero.css";

function Hero() {
  return (
    <div id="Main-container">
      <div className="central column">
        <div className="map-container">
          <Map />
        </div>
        <div className="info-container">
          <TrainStatus />
        </div>
      </div>
    </div>
  );
}

export default Hero;
