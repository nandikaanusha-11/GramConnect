import React from "react";
import { Link } from "react-router-dom";
import "./GrievanceDetails.css";

function GrievanceDetails() {

    // Dummy grievance data (will come from backend later)
    const grievance = {
            complainant:"Anusha",
            ward:"ward 5",
            id: 101,
            category:"electricity",
            department:"Electrical department",
            description: "Street light not working",
            dateRaised:"26.9.26",
            location: "Main Road",
            status: "Pending"
    };

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
                    <strong>Description:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{grievance.description}</span>
                </div>

                <div className="detail">
                    <strong>Ward No:</strong>
                    <span>{grievance.ward}</span>
                </div>

                <div className="detail">
                    <strong>Location:</strong>
                    <span>{grievance.location}</span>
                </div>

                <div className="detail">
                    <strong>Date Raised:</strong>
                    <span>{grievance.dateRaised}</span>
                </div>

                <div className="detail">
                    <strong>Status:</strong>

                    <span className={`status ${grievance.status.toLowerCase()}`}>
                        {grievance.status}
                    </span>

                </div>

                <Link to="/grievances" className="back-btn">
                    Back to Grievances
                </Link>

            </div>

        </div>

    );
}

export default GrievanceDetails;