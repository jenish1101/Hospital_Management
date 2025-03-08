import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/Doctors.css"

const Doctors = () => {
    const [doctorData, setDoctorData] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const responsive = {
        extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4, slidesToSlide: 1 },
        large: { breakpoint: { max: 1324, min: 1005 }, items: 3, slidesToSlide: 1 },
        medium: { breakpoint: { max: 1005, min: 700 }, items: 2, slidesToSlide: 1 },
        small: { breakpoint: { max: 700, min: 0 }, items: 1, slidesToSlide: 1 },
    };

    // Fetch doctor data from the backend
    const fetchDoctorData = async () => {
        try {
            const res = await axios.get("/api/client/doctor-data");
            console.log("Data:", res.data.DoctorData);
            setDoctorData(res.data.DoctorData);
        } catch (error) {
            console.error("Error fetching doctor data:", error);
            
        }
    };

    useEffect(() => {
        fetchDoctorData();
    }, []);

    return (
        <div className="container doctors-section">
            <h2>Doctors</h2>
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {doctorData.map((doctor, index) => (
                    <div key={index} className="card" onClick={() => setSelectedDoctor(doctor)}>
                        <div className="doctor-name">{doctor.name}</div>
                        <img src={`http://localhost:3000${doctor.image}`} alt={doctor.name} />
                    </div>
                ))}
            </Carousel>

            {/* Show More Details Modal */}
            {selectedDoctor && (
                <div className="doctor-details-modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setSelectedDoctor(null)}>✖</button>
                        <img src={`http://localhost:3000${selectedDoctor.image}`} alt={selectedDoctor.name} />
                        <h3>{selectedDoctor.name}
                            <span>{` ${selectedDoctor.surname}`}</span>
                        </h3>
                        <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                        <p><strong>Age:</strong> {selectedDoctor.age} years</p>
                        <p><strong>Gender:</strong> {selectedDoctor.gender}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doctors;
