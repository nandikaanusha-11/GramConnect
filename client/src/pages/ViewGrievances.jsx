import React from "react";
import "./ViewGrievances.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ViewGrievances() {
   const navigate = useNavigate();

   const [grievances, setGrievances] = useState([]);
   const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

    useEffect(() => {
    async function fetchGrievances(){
         try{const response = await axios.get(
    "http://localhost:5000/grievances"
);
setGrievances(response.data);
    }catch(err){
        setError("Unable to load grievances");
    }finally{
          setLoading(false);
    }
}
    fetchGrievances();
}, []);

if (loading) {
   return (
    <div className="message-container">
        <h2>Loading grievances...</h2>
    </div>
);
}

if (error) {
    return (
    <div className="message-container">

        <h2>Unable to load grievances</h2>

        <p>
            Please try again later.
        </p>

        <button
            onClick={() => window.location.reload()}
        >
            Retry
        </button>

    </div>
);
}

if (grievances.length === 0) {
    return (
    <div className="message-container">
        <h2>No grievances found</h2>

        <p>
            Register a grievance to get started.
        </p>

        <button
            onClick={() => navigate("/register")}
        >
            Register Grievance
        </button>

    </div>
);
}

    return (
        <div className="grievance-container">

            <h1>View Grievances</h1>

            <p className="subtitle">
                Track the status of reported community issues
            </p>


            <div className="grievance-list">

                {grievances.map((grievance) => (

                    <div className="grievance-card" key={grievance.grievance_id}
                         onClick={() => navigate(`/grievance/${grievance.grievance_id}`)}>
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