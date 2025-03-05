import { useState, useEffect } from 'react';

//This function fetches the necessary data from TFL API's

function TrainStatus() {
    const [status, setStatus] = useState(null);
    const lineName = "circle"; //Temporary line name for testing purposes

    useEffect(()=> {

        const fetchData = async () => {
            try {
                //contruct URL Variable
                const statusURL = `https://api.tfl.gov.uk/Line/${lineName}/Status`;
                //Calling the API's 
                const statusResponse = await fetch(statusURL);
                // Checking the response
                if (!statusResponse.ok) {
                    throw new Error('Error, your request failed 😖')
                }

                const data = await statusResponse.json();
                setStatus(data[0]);

            } catch(error) {
                console.error('An error while fetching necessary data: ' + error)
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);

    }, [lineName]);

return (
    <div>
        <h2>This is a test of the API Call:</h2>
        {status ? (
            <div>
                <h3>{status.name}</h3>
                <p>Status: {status.lineStatuses[0]?.statusSeverityDescription}</p>
                
                {status.lineStatuses[0]?.reason ? (
                    <p>Disruption Details: {status.lineStatuses[0].reason}</p>
                ) : (
                    <p>Disruptions: No disruptions to the {lineName} line at this time.</p>
                )}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);

}


export default TrainStatus;









