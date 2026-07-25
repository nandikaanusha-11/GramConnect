import React from "react";
import { Link } from "react-router-dom";
import "./GrievanceDetails.css";

function GrievanceDetails() {

    // Dummy grievance data (will come from backend later)
    const grievance = {
        id: 101,
        title: "Street Light Not Working",
        category: "Electricity",
        description:
            "The street light near the bus stop has not been working for the past five days, making the area unsafe during the night.",
        location: "Main Road",
        reportedBy: "Anusha",
        date: "24 July 2026",
        status: "Pending"
    };

    return (

        <div className="details-container">

            <div className="details-card">

                <h1>Grievance Details</h1>

                <div className="detail">
                    <strong>Title:</strong>
                    <span>{grievance.title}</span>
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
                    <strong>Location:</strong>
                    <span>{grievance.location}</span>
                </div>

                <div className="detail">
                    <strong>Reported By:</strong>
                    <span>{grievance.reportedBy}</span>
                </div>

                <div className="detail">
                    <strong>Date:</strong>
                    <span>{grievance.date}</span>
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