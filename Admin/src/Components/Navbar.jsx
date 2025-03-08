import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary mx-5">
      <div className="container-fluid">
        {/* Logo aligned to the left */}
        <Link className="navbar-brand" to="/">
          <img src="./logo.png" alt="Logo" width="100" height="70" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items - Links and Buttons aligned to the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {isAuthenticated && (
            <ul className="navbar-nav text-center mx-5">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">Doctors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/client-message">Client Messages</Link>
              </li>
            </ul>
          )}

          {/* Authentication Buttons */}
          <div className="d-flex gap-2">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-success">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
