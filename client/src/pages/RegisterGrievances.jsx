import { useState } from "react";
import "./RegisterGrievances.css";

function RegisterGrievances() {

  const [formData, setFormData] = useState({
    complainant: "",
    ward: "",
    category: "",
    department: "",
    description: "",
    dateRaised: "",
    status: "Pending"
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Grievance Submitted Successfully!");
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Register New Grievance</h1>

        <form onSubmit={handleSubmit}>

          <label>Complainant Name</label>

          <input
            type="text"
            name="complainant"
            placeholder="Enter complainant name"
            value={formData.complainant}
            onChange={handleChange}
            required
          />

          <label>Ward</label>

          <select
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            required
          >
            <option value="">Select Ward</option>
            <option>Ward 1</option>
            <option>Ward 2</option>
            <option>Ward 3</option>
            <option>Ward 4</option>
            <option>Ward 5</option>
          </select>

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Water Supply</option>
            <option>Roads</option>
            <option>Street Lights</option>
            <option>Sanitation</option>
            <option>Drainage</option>
          </select>

          <label>Department</label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>Public Works</option>
            <option>Water Department</option>
            <option>Electrical</option>
            <option>Health</option>
          </select>

          <label>Description</label>

          <textarea
            name="description"
            rows="5"
            placeholder="Describe the grievance..."
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Date Raised</label>

          <input
            type="date"
            name="dateRaised"
            value={formData.dateRaised}
            onChange={handleChange}
            required
          />

          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <button type="submit">
            Submit Grievance
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterGrievances;