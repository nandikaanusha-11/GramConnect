import React from "react";
import "./WhyGramConnect.css";
import {
    FaBalanceScale,
    FaUsers,
    FaBolt
} from "react-icons/fa";

function WhyGramConnect() {

    const cards = [

        {
            icon: <FaBalanceScale />,
            title: "Transparent Governance",
            text: "Every grievance is securely recorded and tracked, ensuring accountability and transparency throughout the resolution process."
        },

        {
            icon: <FaUsers />,
            title: "Citizen First",
            text: "A simple digital platform connecting citizens with Panchayat officials to make grievance registration effortless."
        },

        {
            icon: <FaBolt />,
            title: "Faster Resolution",
            text: "Digital workflows help officials monitor complaints efficiently and resolve issues without unnecessary delays."
        }

    ];

    return (

        <section className="why-section">

            <div className="why-heading">

                <span className="why-tag">
                    WHY CHOOSE US
                </span>

                <h2>
                    Why GramConnect?
                </h2>

                <p>
                    GramConnect transforms traditional grievance management into
                    a transparent, digital, and citizen-centric platform,
                    ensuring every complaint reaches the right authority.
                </p>

            </div>

            <div className="why-grid">

                {cards.map((card, index) => (

                    <div className="why-card" key={index}>

                        <div className="why-icon">

                            {card.icon}

                        </div>

                        <h3>

                            {card.title}

                        </h3>

                        <p>

                            {card.text}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default WhyGramConnect;