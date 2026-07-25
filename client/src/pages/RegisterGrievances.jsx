import { useState } from "react";
import "./RegisterGrievances.css";
import axios from "axios";

function RegisterGrievances() {

  const [formData, setFormData] = useState({
    complainant: "",
    ward: "",
    category: "",
    department: "",
    description: "",
    dateRaised: "",
   user_id: 1
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

     try {

    const response = await axios.post(
      "http://localhost:5000/grievances",
      formData
    );

    alert(response.data.message);

    console.log(response.data);

  } catch (err) {

    console.log(err);

    alert("Failed to submit grievance.");

  }
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


           <label>Location</label>

          <textarea
            name="location"
            rows="5"
            placeholder="Enter the location:"
            value={formData.location}
            onChange={handleChange}
            required
          />

          

          <button type="submit">
            Submit Grievance
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterGrievances;