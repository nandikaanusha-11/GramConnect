import React, { useState, useEffect } from "react";
import "./UpdateStatus.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStatus() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [grievance, setGrievance] = useState({});

    useEffect(() => {

        async function fetchGrievance() {

            try {

                const response = await axios.get(
                    `http://localhost:5000/grievances/${id}`
                );

                setGrievance(response.data);

            }

            catch (err) {

                console.log(err);

            }

        }

        fetchGrievance();

    }, [id]);



    async function handleUpdate(e) {

        e.preventDefault();

        try {

            const response = await axios.put(

                `http://localhost:5000/grievances/${id}`,

                {
                    status: grievance.status
                }

            );

            alert(response.data.message);

            navigate(`/grievance/${id}`);

        }

        catch (err) {

            alert(err.response?.data?.message || "Update Failed");

        }

    }



    return (

        <div className="update-container">

            <div className="update-card">

                <h1>Update Grievance Status</h1>

                <form onSubmit={handleUpdate}>

                    <label>Complainant</label>

                    <input
                        type="text"
                        value={grievance.complainant || ""}
                        readOnly
                    />

                    <label>Category</label>

                    <input
                        type="text"
                        value={grievance.category || ""}
                        readOnly
                    />

                    <label>Department</label>

                    <input
                        type="text"
                        value={grievance.department || ""}
                        readOnly
                    />

                    <label>Ward</label>

                    <input
                        type="text"
                        value={grievance.ward || ""}
                        readOnly
                    />

                    <label>Location</label>

                    <input
                        type="text"
                        value={grievance.location || ""}
                        readOnly
                    />

                    <label>Description</label>

                    <textarea
                        rows="5"
                        value={grievance.description || ""}
                        readOnly
                    />

                    <label>Status</label>

                    <select

                        value={grievance.status || "Pending"}

                        onChange={(e) =>
                            setGrievance({
                                ...grievance,
                                status: e.target.value
                            })
                        }

                    >

                        <option>Pending</option>

                        <option>In Progress</option>

                        <option>Resolved</option>

                    </select>

                    <button type="submit">

                        Update Status

                    </button>

                </form>

            </div>

        </div>

    );

}

export default UpdateStatus;