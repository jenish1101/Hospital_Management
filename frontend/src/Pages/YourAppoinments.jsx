import { useEffect, useState } from "react";
import axios from "axios";
import "./css/YourAppoinments.css";

const YourAppointments = () => {
    const [data, setData] = useState([]);

    const fetchAppointments = async () => {
        try {
            const res = await axios.get("/api/client/your-appoinment");
            setData(res.data.Yourappoinment);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div className="appointments-container">
            <h2>Your Appointments</h2>
            {data.length === 0 ? (
                <p>No appointments found.</p>
            ) : (
                <div className="appointments-grid">
                    {data.map((appointment) => (
                        <div key={appointment._id} className="appointment-card">
                            <h3>{appointment.firstName} {appointment.lastName}</h3>
                            <p><strong>Doctor:</strong> {appointment.doctor}</p>
                            <p><strong>Department:</strong> {appointment.department}</p>
                            <p><strong>Appointment Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
                            <p><strong>Blood Group:</strong> {appointment.bloodGroup}</p>
                            <p><strong>Gender:</strong> {appointment.gender}</p>
                            <p><strong>Phone:</strong> {appointment.phone}</p>
                            <p><strong>Email:</strong> {appointment.email}</p>
                            <p><strong>Address:</strong> {appointment.address}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YourAppointments;