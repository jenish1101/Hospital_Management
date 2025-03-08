import { useEffect, useState } from 'react';
import './Appoinments.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [Appoinments, setAppoinments] = useState([]);

  const navigate = useNavigate();
  
  const AppoinmentsData=async()=>{
    try {
      const res = await axios.get("/api/admin/appoinments");
      // console.log(res.data.AppoinmentData);
      setAppoinments(res.data.AppoinmentData);
    } catch (error) {
      console.error("Error fetching messages:", error);
      navigate("/login");
      setTimeout(() => {
        alert("Login To Proceed");
      }, 1000);

    }
    
  }

  useEffect(()=>{
    AppoinmentsData();
  },[]);

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h1 className="appointment-title">Appointments</h1>
        <div className="appointment-cards-container">
          {Appoinments.map((appointment) => (
            <div className="appointment-card" key={appointment._id}>
              <h2 className="patient-name">{appointment.firstName} {appointment.lastName}</h2>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Phone:</strong> {appointment.phone}</p>
              <p><strong>Blood Group:</strong> {appointment.bloodGroup}</p>
              <p><strong>Date of Birth:</strong> {new Date(appointment.dob).toLocaleDateString()}</p>
              <p><strong>Gender:</strong> {appointment.gender}</p>
              <p><strong>Appointment Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
              <p><strong>Department:</strong> {appointment.department}</p>
              <p><strong>Doctor:</strong> {appointment.doctor}</p>
              <p><strong>Address:</strong> {appointment.address}</p>
              {/* <p><strong>Created At:</strong> {new Date(appointment.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(appointment.updatedAt).toLocaleString()}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
