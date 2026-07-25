import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AdminSignUp.css";

function AdminSignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    async function handleSubmit(e) {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:5000/admin/signup",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }
            );

            alert(response.data.message);

            navigate("/admin-login");

        } catch (err) {

            alert(err.response?.data?.message || "Signup Failed");

        }

    }

    return (

        <div className="admin-signup-container">

            <div className="admin-signup-card">

                <h1>Admin Sign Up</h1>

                <form onSubmit={handleSubmit}>

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label>Confirm Password</label>

                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Sign Up
                    </button>

                </form>

                <p>
                    Already have an account?{" "}
                    <Link to="/admin-login">
                        Login
                    </Link>
                </p>

            </div>

        </div>

    );

}

export default AdminSignUp;