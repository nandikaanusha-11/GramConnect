import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        // Backend authentication will be connected later
    };


    return (

        <div className="admin-login-container">

            <div className="admin-login-box">

                <h1>Admin Login</h1>

                <p>
                    Login to manage community grievances
                </p>


                <form onSubmit={handleSubmit}>


                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter admin email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />


                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />


                    <button type="submit">
                        Login
                    </button>


                </form>

            </div>

        </div>

    );
}

export default AdminLogin;