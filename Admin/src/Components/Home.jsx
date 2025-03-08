import { useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const HomeJwtVerify=async()=>{
    try {
      await axios.get("/api/admin/home");
      // alert(res.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      navigate("/login");
      setTimeout(()=>{
        alert("Login To Proceed...");
      },1000)
      
      // alert(error.res.data.message)
    }
  }


  useEffect(() => {
    HomeJwtVerify();
  }, [])
  

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome, Doctor</h1>
          <p>Manage your patients, appointments, and medical records with ease.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="./hero.png" // Replace with your image URL
            alt="Doctor"
            className='animated_logo'
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Appointment Management</h3>
            <p>Easily schedule and manage patient appointments.</p>
          </div>
          <div className="feature-card">
            <h3>Patient Records</h3>
            <p>Access and update patient medical records securely.</p>
          </div>
          <div className="feature-card">
            <h3>Telemedicine</h3>
            <p>Conduct virtual consultations with your patients.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;