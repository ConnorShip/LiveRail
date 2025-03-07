import { useState, useEffect } from "react";
import getStatusClass from './lineStatusColor'
import './trainStatus.css'


//This function fetches the necessary data from TFL API's
function TrainStatus() {
  const [status, setStatus] = useState(null);

  const lineName = "central"; //Temporary line name for testing

  useEffect(() => {
    const fetchData = async () => {
      try {
        //contruct URL Variable
        const statusURL = `https://api.tfl.gov.uk/Line/${lineName}/Status`;
        //Calling the API
        const statusResponse = await fetch(statusURL);
        // Checking the response
        if (!statusResponse.ok) {
          throw new Error("Error, your request failed 😖");
        }
        //Awaiting & assigning the response to 'data'
        const data = await statusResponse.json();
        setStatus(data[0]);

        //catch & display any errors
      } catch (error) {
        console.error("An error while fetching necessary data: " + error);
      }
    };

    fetchData();
    //updating the data every 45sec
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);

  }, [lineName]);

  return (
    <div className="bottomMain">
      {status ? (
        <div className={`infoContainer ${getStatusClass(status)}`}>
          <div className="leftContainer">
            <span className="title">{status.name.toUpperCase()} LINE</span>
            <p id="lineStatus">Status: {status.lineStatuses[0]?.statusSeverityDescription}</p>
          </div>

          <div className="middleContainer">
            {status.lineStatuses[0]?.reason ? (
              <>
                <span className="title">Disruption</span> 
                <p id="disruptionText">{status.lineStatuses[0].reason}</p>
              </>
            ) : (
              <p>
                Disruptions: No disruptions to the {lineName} line at this time.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TrainStatus;