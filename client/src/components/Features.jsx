import React from "react";
import "./Features.css";

import {
    FaClipboardList,
    FaSearch,
    FaUserShield,
    FaTasks,
    FaBolt,
    FaMapMarkedAlt
} from "react-icons/fa";

function Features() {

    const features = [

        {
            icon: <FaClipboardList />,
            title: "Easy Registration",
            text: "Citizens can quickly register grievances through a simple and intuitive digital form."
        },

        {
            icon: <FaSearch />,
            title: "Track Grievances",
            text: "Monitor the progress of every grievance from registration to final resolution."
        },

        {
            icon: <FaUserShield />,
            title: "Secure Admin Access",
            text: "Only authenticated administrators can access and update grievance records."
        },

        {
            icon: <FaTasks />,
            title: "Status Management",
            text: "Update grievance status as Pending, In Progress, or Resolved with ease."
        },

        {
            icon: <FaBolt />,
            title: "Fast Resolution",
            text: "Digital workflows reduce delays and help authorities resolve issues efficiently."
        },

        {
            icon: <FaMapMarkedAlt />,
            title: "Ward-wise Organization",
            text: "Categorize complaints by ward, department, and location for better management."
        }

    ];

    return (

        <section className="feature-section">

            <div className="feature-heading">

                <span className="feature-tag">
                    FEATURES
                </span>

                <h2>
                    Everything You Need
                </h2>

                <p>
                    GramConnect provides powerful tools for citizens and Panchayat
                    administrators to ensure transparent, organized, and efficient
                    grievance management.
                </p>

            </div>

            <div className="feature-grid">

                {features.map((feature, index) => (

                    <div className="feature-card" key={index}>

                        <div className="feature-icon">

                            {feature.icon}

                        </div>

                        <h3>

                            {feature.title}

                        </h3>

                        <p>

                            {feature.text}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Features;