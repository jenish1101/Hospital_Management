// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  // const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  // const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, gender, password );
    
    if(!firstName || !lastName || !email || !phone || !gender || !password) {
      alert("Please enter all required information...");
      return false;
    }
    else if(phone.length < 10 || phone.length > 10){
      alert("Mobile phone must be at least 10 characters");
      return false;
    }
    else{
      // alert("Form Submitted successfully...");
      const res= await axios.post("/api/client/register",{firstName, lastName, email, phone, gender, password} );
      alert(res.data.message)
    }

    // try {
    //   await axios
    //     .post(
    //       "http://localhost:3000/api/v1/user/patient/register",
    //       { firstName, lastName, email, phone, gender, password },
    //       {
    //         withCredentials: true,
    //         headers: { "Content-Type": "application/json" },
    //       }
    //     )
    //     .then((res) => {
    //       toast.success(res.data.message);
    //       setIsAuthenticated(true);
    //       navigateTo("/");
    //       setFirstName("");
    //       setLastName("");
    //       setEmail("");
    //       setPhone("");
    //       setGender("");
    //       setPassword("");
    //     });
    // } catch (error) {
    //   toast.error(error.response.data.message);
    // }
  };

  // if (isAuthenticated) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <>
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
          Join our community to access exclusive features and stay updated with the latest in healthcare technology.
        </p>
        <form onSubmit={handleRegistration}>
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
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" style={{cursor:"pointer"}}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
