import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="notfound-container">

            <div className="notfound-content">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Oops! The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link to="/" className="home-btn">
                    Back to Home
                </Link>

            </div>

        </div>
    );
}

export default NotFound;