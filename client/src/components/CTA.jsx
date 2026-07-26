import React from "react";
import "./CTA.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CTA() {

    const navigate = useNavigate();

    return (

        <section className="cta-section">

            <div className="cta-overlay">

                <span className="cta-tag">
                    START TODAY
                </span>

                <h2>
                    Building Better Communities Starts With Every Voice
                </h2>

                <p>
                    Register your grievance today and help create a transparent,
                    accountable, and citizen-centric Panchayat system through
                    GramConnect.
                </p>

                <button
                    className="cta-button"
                    onClick={() => navigate("/register")}
                >
                    Register Grievance
                    <FaArrowRight />
                </button>

            </div>

        </section>

    );

}

export default CTA;