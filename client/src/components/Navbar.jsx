import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  function handleLogout() {

    localStorage.removeItem("token");

    alert("Logged out successfully");

    navigate("/admin-login");

}
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

        {token && (
        <button
        className="logout-btn"
        onClick={handleLogout}
        >
        Logout
      </button>
      )}

      </div>

    </nav>
  );
}

export default Navbar;