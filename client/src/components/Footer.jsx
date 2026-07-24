import React from "react";
import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>GramConnect</h2>

                    <p>
                        Connecting citizens and local authorities
                        to solve community issues efficiently.
                    </p>

                </div>


                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <a href="/">Home</a>
                    <a href="/register">Submit Grievance</a>
                    <a href="/grievances">View Grievances</a>

                </div>


                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>Email: support@gramconnect.com</p>
                    <p>Phone: +91 98765 43210</p>

                </div>


            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 GramConnect. All rights reserved.
                </p>

            </div>


        </footer>

    );

}

export default Footer;