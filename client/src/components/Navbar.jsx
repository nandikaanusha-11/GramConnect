import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaLeaf className="logo-icon" />
        <h2><span>Gram</span>Connect</h2>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/register">
          Register Grievance
        </Link>

        <Link to="/grievances">
          View Grievances
        </Link>

        <Link
          className="login-btn"
          to="/admin-login"
        >
          Admin Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;