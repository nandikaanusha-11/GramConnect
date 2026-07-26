import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./GrievanceDetails.css";
import { useNavigate } from "react-router-dom";

function GrievanceDetails() {
    
    const { id } = useParams();
     const navigate = useNavigate();
    const [grievance, setGrievance] = useState(null);
   const [error,setError]=useState("");
   const [showLoginMessage, setShowLoginMessage] = useState(false);
    useEffect(() => {

        async function fetchGrievance() {

            try {

                const response = await axios.get(
                    `http://localhost:5000/grievances/${id}`
                );

                setGrievance(response.data);

            } catch (err) {
               setError("Grievance not found.");
            }

        }

        fetchGrievance();

    }, [id]);

   
    if(error || !grievance){

    return(
        <div className="message-container">

            <h2>{error}</h2>

            <p>
                The grievance you are looking for does not exist.
            </p>

            <button
                onClick={() => navigate("/grievances")}
            >
                Back to Grievances
            </button>

        </div>
    );

}


function handleUpdateClick() {
const token = localStorage.getItem("token");
if (token) {

        navigate(`/update-status/${grievance.grievance_id}`);

    }
   else {
        navigate("/access-denied");
        }
}

    return (

        <div className="details-container">

            <div className="details-card">

                <h1>Grievance Details</h1>

                <div className="detail">
                    <strong>Complainant:</strong>
                    <span>{grievance.complainant}</span>
                </div>

                <div className="detail">
                    <strong>Department:</strong>
                    <span>{grievance.department}</span>
                </div>

                <div className="detail">
                    <strong>Category:</strong>
                    <span>{grievance.category}</span>
                </div>

                <div className="detail">
                    <strong>Description:</strong>
                    <span>{grievance.description}</span>
                </div>

                <div className="detail">
                    <strong>Ward:</strong>
                    <span>{grievance.ward}</span>
                </div>

                <div className="detail">
                    <strong>Location:</strong>
                    <span>{grievance.location}</span>
                </div>

                <div className="detail">
                    <strong>Date Raised:</strong>
                    <span>{grievance.date_raised}</span>
                </div>

                <div className="detail">
                    <strong>Status:</strong>

                    <span className={`status ${grievance.status.toLowerCase().replace(" ", "-")}`}>
                        {grievance.status}
                    </span>

                </div>

               
                  <Link to="/grievances" className="back-btn">
                    Back to Grievances
                </Link>
              
                 <button
                className="update-btn"
                onClick={handleUpdateClick}
               >
                Update Status
               </button>
              

            </div>

        </div>

    );
}

export default GrievanceDetails;