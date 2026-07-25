import React from "react";
import "./ViewGrievances.css";
import { useState, useEffect } from "react";
import axios from "axios";
function ViewGrievances() {
   
   const [grievances, setGrievances] = useState([]);
   

    useEffect(() => {
    async function fetchGrievances(){
        const response = await axios.get(
    "http://localhost:5000/grievances"
);
setGrievances(response.data);
    }

    fetchGrievances();
}, []);

    return (
        <div className="grievance-container">

            <h1>View Grievances</h1>

            <p className="subtitle">
                Track the status of reported community issues
            </p>


            <div className="grievance-list">

                {grievances.map((grievance) => (

                    <div className="grievance-card" key={grievance.grievance_id}>

                        <div className="card-header">
                            <h3>{grievance.complainant}</h3>

                            <span className={`status ${grievance.status.toLowerCase().replace(" ","-")}`}>
                                {grievance.status}
                            </span>
                        </div>


                        <p>
                            <strong>Category:</strong> {grievance.category}
                        </p>

                        <p>
                            <strong>Location:</strong> {grievance.location}
                        </p>

                        <p>
                            <strong>Grievance ID:</strong> #{grievance.grievance_id}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ViewGrievances;