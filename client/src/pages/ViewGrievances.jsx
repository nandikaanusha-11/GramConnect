import React from "react";
import "./ViewGrievances.css";

function ViewGrievances() {
    // title: "",
    // ward: "",
    // category: "",
    // department: "",
    // description: "",
    // dateRaised: "",
    // location:"",
    // status: "Pending"

    // Temporary dummy data (will come from MongoDB later)
    const grievances = [
        {
            complainant:"Anusha",
            ward:5,
            id: 101,
            category:"electricity",
            department:"Electrical department",
            description: "Street light not working",
            dateRaised:"26.9.26",
            location: "Main Road",
            status: "Pending"
        },
        {
            complainant:"Hirthika",
            ward:5,
            id: 102,
            category: "Sanitation",
            department:"Health",
            description: "Very unclean",
            dateRaised:"18.3.26",
            location: "Market Area",
            status: "Resolved"
        },
        {
            complainant:"Sasikala",
            ward:5,
            id: 103,
            category: "Infrastructure",
            description: "Road damage complaint",
            dateRaised:"1.2.26",
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
                            <strong>Grievance ID:</strong> #{grievance.id}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ViewGrievances;