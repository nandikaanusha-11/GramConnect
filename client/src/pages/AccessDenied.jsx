import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccessDenied.css";

function AccessDenied() {

    const navigate = useNavigate();

    return (

        <div className="access-page">

            <div className="access-card">

                <h1 className="access-title">
                    Access Denied
                </h1>

                <p className="access-text">
                    You must log in as an administrator to update the grievance status.
                </p>

                <button
                    className="access-login-button"
                    onClick={() => navigate("/admin-login")}
                >
                    Admin Login
                </button>

                <button
                    className="access-back-button"
                    onClick={() => navigate("/grievances")}
                >
                    Back to Grievances
                </button>

            </div>

        </div>

    );

}

export default AccessDenied;