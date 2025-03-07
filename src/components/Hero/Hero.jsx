import Map from "../../resources/cleanSVG";
import TrainStatus from "../TrainStatus/trainStatus";
import "./Hero.css";

function Hero() {
  return (
    <div id="Main-container">
      <div className="map-container">
          <Map />
      </div>
    </div>
  );
}

export default Hero;
