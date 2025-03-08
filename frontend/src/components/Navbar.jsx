import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// For Toggle Navbar
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {

  // For Toggle Navbar
  const { isAuthenticated, logout } = useContext(AuthContext); // Get auth state from context

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Remove token & update state
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="logo-img" /></Link>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          {
            isAuthenticated ? (
              <>
                <div className="links">
        
                  <Link to={"/about"} onClick={() => setShow(!show)}>
                    About Us
                  </Link>
                  <Link to={"/faqs"} onClick={() => setShow(!show)}>
                    FAQs
                  </Link>
                  <Link to={"/appointment"} onClick={() => setShow(!show)}>
                    Appointment
                  </Link>
                  <Link to={"/your-appoinment"} onClick={() => setShow(!show)}>
                    Your Appoinments
                  </Link>
                  <Link to={"/your-query"} onClick={() => setShow(!show)}>
                    Messages
                  </Link>
                </div>
                <button className="logoutBtn btn" onClick={handleLogout}>
                  LOGOUT
                </button>
              </>
            ) : (""
              // <button className="loginBtn btn" onClick={goToLogin} >
              //   {/* LOGIN */}
              // </button>
            )
          }


        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
