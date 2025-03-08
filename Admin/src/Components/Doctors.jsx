import "./Doctors.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState({
        name: "",
        surname: "",
        age: "",
        gender: "",
        specialty: "",
        image: null
    });
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const fetchDoctorsData = async () => {
        try {
            const res = await axios.get("/api/admin/doctors");
            setDoctors(res.data.doctorData);
        } catch (error) {
            console.error("Error fetching doctors:", error);
            navigate("/login");
            setTimeout(() => alert("Login To Proceed..."), 1000);
        }
    };

    useEffect(() => {
        fetchDoctorsData();
    }, []);

    const handleInputChange = (e) => {
        if (e.target.name === "image") {
            setNewDoctor({ ...newDoctor, image: e.target.files[0] });
        } else {
            setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", newDoctor.name);
        formData.append("surname", newDoctor.surname);
        formData.append("age", newDoctor.age);
        formData.append("gender", newDoctor.gender);
        formData.append("specialty", newDoctor.specialty);
        if (newDoctor.image) formData.append("image", newDoctor.image);

        try {
            let res;
            if (editingDoctor) {
                res = await axios.put(`/api/admin/doctors/update/${editingDoctor._id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            } else {
                res = await axios.post("/api/admin/doctors/add", formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            }

            alert(res.data.message);
            setNewDoctor({ name: "", surname: "", age: "", gender: "", specialty: "", image: null });
            setShowForm(false);
            setEditingDoctor(null);
            fetchDoctorsData();
        } catch (error) {
            console.error("Error saving doctor:", error);
            alert("Failed to save doctor.");
        }
    };


    const handleEditDoctor = (doctor) => {
        setEditingDoctor(doctor);
        setNewDoctor({
            name: doctor.name,
            surname: doctor.surname,
            age: doctor.age,
            gender: doctor.gender,
            specialty: doctor.specialty,
            image: null
        });
        setShowForm(true);
    };

    const handleDeleteDoctor = async (id) => {
        if (!window.confirm("Are you sure you want to delete this doctor?")) return;
        try {
            const res = await axios.delete(`/api/admin/doctors/delete/${id}`);
            alert(res.data.message);
            fetchDoctorsData();
        }
        catch (error) {
            console.error("Error deleting doctor:", error);
            alert("Failed to delete doctor.");
        }
    };

    return (
        <div className="container">
            <h2>Our Team</h2>
            <button className="add-doctor-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close Form" : editingDoctor ? "Edit Doctor" : "Add Doctor"}
            </button>

            {showForm && (
                <form className="doctor-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={newDoctor.name} onChange={handleInputChange} required />
                    <input type="text" name="surname" placeholder="Surname" value={newDoctor.surname} onChange={handleInputChange} required />
                    <input type="number" name="age" placeholder="Age" value={newDoctor.age} onChange={handleInputChange} required />
                    <select name="gender" value={newDoctor.gender} onChange={handleInputChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="text" name="specialty" placeholder="Specialty" value={newDoctor.specialty} onChange={handleInputChange} required />
                    <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                    <button type="submit">{editingDoctor ? "Update Doctor" : "Add Doctor"}</button>
                </form>
            )}


            {/* For Show Doctor   */}
            <div className="doctors-grid">
                {doctors.length === 0 && <p>No doctors found.</p>}
                {doctors.map((doctor) => (
                    <div key={doctor._id} className="doctor-card">
                        <img src={`http://localhost:3000${doctor.image}`} alt={doctor.name} />
                        <h3>{doctor.name} {doctor.surname}</h3>
                        <p>{doctor.specialty}</p>
                        <p>{doctor.age} years old, {doctor.gender}</p>
                        <div className="ed_buttons">
                            <button onClick={() => handleEditDoctor(doctor)} className="edit-btn">Edit</button>
                            <button onClick={() => handleDeleteDoctor(doctor._id)} className="delete-btn">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
