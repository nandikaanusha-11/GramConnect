import React from "react";
import "./ViewGrievances.css";

function ViewGrievances() {

    // Temporary dummy data (will come from MongoDB later)
    const grievances = [
        {
            id: 101,
            title: "Street light not working",
            category: "Electricity",
            location: "Main Road",
            status: "Pending"
        },
        {
            id: 102,
            title: "Garbage collection issue",
            category: "Sanitation",
            location: "Market Area",
            status: "Resolved"
        },
        {
            id: 103,
            title: "Road damage complaint",
            category: "Infrastructure",
            location: "Village Road",
            status: "In Progress"
        }
    ];


    return (
        <div className="grievance-container">

            <h1>View Grievances</h1>

            <p className="subtitle">
                Track the status of reported community issues
            </p>


            <div className="grievance-list">

                {grievances.map((grievance) => (

                    <div className="grievance-card" key={grievance.id}>

                        <div className="card-header">
                            <h3>{grievance.title}</h3>

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
                            <strong>Grievance ID:</strong> #{grievance.id}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ViewGrievances;