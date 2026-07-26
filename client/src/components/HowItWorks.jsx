import React from "react";
import "./HowItWorks.css";

import {
    FaClipboardList,
    FaSearch,
    FaSyncAlt,
    FaCheckCircle
} from "react-icons/fa";

function HowItWorks() {

    const steps = [

        {
            number: "01",
            icon: <FaClipboardList />,
            title: "Registration",
            description:
                "Citizens submit their grievance by entering complaint details"
        },

        {
            number: "02",
            icon: <FaSearch />,
            title: "Review",
            description:
                "The Panchayat reviews the grievance and assigns it to the appropriate department."
        },

        {
            number: "03",
            icon: <FaSyncAlt />,
            title: "Status Updates",
            description:
                "Authorized administrators update the grievance status as work progresses."
        },

        {
            number: "04",
            icon: <FaCheckCircle />,
            title: "Issue Resolved",
            description:
                "Citizens can monitor the grievance until it is successfully resolved."
        }

    ];

    return (

        <section className="timeline-section">

            <div className="timeline-header">

                <span className="timeline-tag">
                    HOW IT WORKS
                </span>

                <h2>
                    A Simple Four-Step Process
                </h2>

                <p>
                    GramConnect digitizes grievance management through a
                    transparent workflow, ensuring every complaint is tracked
                    from submission to successful resolution.
                </p>

            </div>

            <div className="timeline-wrapper">

                <div className="timeline-progress"></div>

                {steps.map((step, index) => (

                    <div
                        className="timeline-item"
                        key={index}
                    >

                        <div className="timeline-circle">

                            {step.icon}

                        </div>

                        <span className="timeline-step-number">

                            {step.number}

                        </span>

                        <div className="timeline-card">

                            <h3>

                                {step.title}

                            </h3>

                            <p>

                                {step.description}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default HowItWorks;