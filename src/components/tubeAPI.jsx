import { useState, useEffect } from 'react';

function TrainStatus() {
    const [status, setStatus] = useState(null);
    const lineName = "piccadilly"; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                let URL = `https://api.tfl.gov.uk/Line/${lineName}/Status`;

                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setStatus(data);
            } catch (error) {
                console.error("Error fetching train data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Train Status Testing</h2>
            {status && status.length > 0 ? (
                status.map((line) => {
                    const lineName = line.name;
                    const serviceMessage = line.lineStatuses[0].statusSeverityDescription;
                 
    
                    return (
                        <div key={line.id}>
                            <h3>{lineName}</h3>
                            <p>Status: {serviceMessage}</p>
                            <p>Crowding Level: API CALL TBD</p>
                        </div>
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TrainStatus;



