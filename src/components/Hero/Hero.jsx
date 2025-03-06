import Map from "../Map";
import TrainStatus from "../TrainStatus/trainStatus";
import "./Hero.css";

function Hero() {
  return (
    <div id="Main-container">
      <div className="central column">
        <div className="map-container">
          <Map />
        </div>
        <TrainStatus />
      </div>
    </div>
  );
}

export default Hero;
