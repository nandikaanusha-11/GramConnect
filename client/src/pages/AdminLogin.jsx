import React, { useState } from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


     const handleSubmit = async(e) => {
        e.preventDefault();

         try{

        const response = await axios.post(

            "http://localhost:5000/admin/login",

            {

                email,

                password

            }

        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        alert(response.data.message);

       navigate("/grievances");
    }

    catch(err){

        alert(err.response?.data?.message || "Login Failed");

    }


        
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

                    <p className="signup-text">
    Don't have an admin account?{" "}
    <Link to="/admin-signup">
        Sign Up
    </Link>
</p>


                </form>

            </div>

        </div>

    );
}

export default AdminLogin;