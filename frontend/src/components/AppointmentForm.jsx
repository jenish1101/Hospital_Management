import { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctor, setDoctor] = useState("");
  const [address, setAddress] = useState("");
  // const [hasVisited, setHasVisited] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  // Doctor data linked to departments
  const doctorsData = [
    { name: "Dr. maktu varma", department: "Pediatrics" },
    { name: "Dr. Neha Sharma", department: "Orthopedics" },
    { name: "Dr. Raj Mehta", department: "Cardiology" },
    { name: "Dr. Pooja Gupta", department: "Neurology" },
    { name: "Dr. Anil Verma", department: "Oncology" },
    { name: "Dr. Simran Kaur", department: "Radiology" },
    { name: "Dr. Arjun Yadav", department: "Physical Therapy" },
    { name: "Dr. Rakesh Nair", department: "Dermatology" },
    { name: "Dr. Kiran Bose", department: "ENT" },
    { name: "Dr. Manoj Tiwari", department: "Pediatrics" },
    { name: "Dr. Swati Desai", department: "Orthopedics" },
    { name: "Dr. Vivek Khanna", department: "Cardiology" },
    { name: "Dr. Kavita Joshi", department: "Neurology" },
    { name: "Dr. Nitin Malhotra", department: "Oncology" },
    { name: "Dr. Meera Saxena", department: "Radiology" },
    { name: "Dr. Suraj Reddy", department: "Physical Therapy" },
    { name: "Dr. Rekha Iyer", department: "Dermatology" },
    { name: "Dr. Ajay Dubey", department: "ENT" },
    { name: "Dr. Bhavna Chatterjee", department: "Pediatrics" },
    { name: "Dr. Tarun Ahuja", department: "Orthopedics" },
    { name: "Dr. Ananya Roy", department: "Cardiology" },
    { name: "Dr. Sandeep Bhasin", department: "Neurology" },
    { name: "Dr. Payal Aggarwal", department: "Oncology" },
    { name: "Dr. Rajesh Pillai", department: "Radiology" },
    { name: "Dr. Sheetal Kapoor", department: "Physical Therapy" },
    { name: "Dr. Mohan Prasad", department: "Dermatology" },
    { name: "Dr. Supriya Nanda", department: "ENT" },
    { name: "Dr. Devendra Rao", department: "Pediatrics" },
    { name: "Dr. Smita Bhattacharya", department: "Orthopedics" },
    { name: "Dr. Vinod Kulkarni", department: "Cardiology" },
    { name: "Dr. Jaya Sen", department: "Neurology" },
    { name: "Dr. Harish Menon", department: "Oncology" },
    { name: "Dr. Priya Deshmukh", department: "Radiology" },
    { name: "Dr. Alok Pandey", department: "Physical Therapy" },
    { name: "Dr. Sheetal Thakur", department: "Dermatology" },
    { name: "Dr. Nandini Patil", department: "ENT" },
    { name: "Dr. Vikram Sharma", department: "Pediatrics" },
    { name: "Dr. Shweta Ghosh", department: "Orthopedics" },
    { name: "Dr. Saurabh Jain", department: "Cardiology" },
    { name: "Dr. Madhuri Rao", department: "Neurology" },
  ];


  // Get doctors based on selected department
  const filteredDoctors = doctorsData.filter(
    (doc) => doc.department === department
  );

  const handleAppointment = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, bloodGroup, dob, gender , appointmentDate, department, doctor, address);

    if(!firstName || !lastName || !email || !phone || !bloodGroup || !dob || !gender || !appointmentDate || !department ||!doctor || !address){
      alert("Please enter All Fields...");
      return false;
    }
    else if(phone.length < 10 || phone.length >10){
      alert("Mobile phone must be at least 10 characters");
      return false;
    }
    else{
      // alert("Form Submitted Successfully...");
    
      const res = await axios.post("/api/client/appoinment",{
        firstName, lastName, email, phone, bloodGroup, dob, gender , appointmentDate, department, doctor, address
      });
      alert(res.data.message)
    }
  };

  return (
    <div className="container form-component appointment-form">
      <h2>Appointment</h2>
      <form onSubmit={handleAppointment}>
        {/* First Name & Last Name */}
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email & Phone */}
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Blood Group & DOB */}
        <div>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group, index) => (
              <option value={group} key={index}>
                {group}
              </option>
            ))}
          </select>
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Gender & Appointment Date */}
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>

        {/* Department & Doctor Selection */}
        <div>
          {/* Department Dropdown */}
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setDoctor(""); // Reset doctor selection when department changes
            }}
          >
            {departmentsArray.map((dept, index) => (
              <option value={dept} key={index}>
                {dept}
              </option>
            ))}
          </select>

          {/* Doctor Dropdown (Filtered by Department) */}
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            disabled={!filteredDoctors.length}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map((doc, index) => (
              <option key={index} value={doc.name}>
                {doc.name}
              </option>
            ))}

          </select>
        </div>

        {/* Address */}
        <textarea
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          style={{ resize: "none" }}
        />

        {/* Visited Before Checkbox */}
        {/* <div>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            style={{ width: "25px" }}
          />
          <p style={{ marginBottom: 0 }}>Have you visited before?</p>
        </div> */}

        {/* Submit Button */}
        <button style={{ margin: "0 auto" , cursor:"pointer"}}>GET APPOINTMENT</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
