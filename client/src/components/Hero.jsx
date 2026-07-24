import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          Transparent • Efficient • Citizen First
        </p>

        <h1>
          Panchayat Grievance Management System
        </h1>

        <p className="hero-description">
          Register, track and resolve citizen grievances through a
          centralized digital platform designed for village governance.
        </p>

        <div className="hero-buttons">

          <Link to="/register" className="primary-btn">
            Register Grievance
          </Link>

          <Link to="/grievances" className="secondary-btn">
            View Grievances
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;