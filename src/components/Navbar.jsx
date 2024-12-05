import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../assets/pms-project-management-services-logo.png"; 
import { FaHome, FaMapMarkedAlt, FaBell, FaSignOutAlt } from "react-icons/fa"; // Import React Icons

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Navigate to Login
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Link to the Dashboard */}
        <Link className="navbar-brand me-4" to="/home">
          <img src={logo} alt="Kpk police logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active me-4" to="/home">
              <FaHome className="me-2" /> Home
            </Link>
            <Link className="nav-link me-4" to="/map">
              <FaMapMarkedAlt className="me-2" /> Map
            </Link>
            <Link className="nav-link me-4" to="/notifications">
              <FaBell className="me-2" /> Notifications
            </Link>
          </div>
          {/* Align the button to the right */}
          <button
            className="btn btn-outline-danger ms-auto"
            type="submit"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" /> Log out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
