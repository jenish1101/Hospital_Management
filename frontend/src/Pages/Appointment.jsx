import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Doctors from "../components/Doctors";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appointment = () => {

  const navigate = useNavigate(); 

  const ForCheckJwtTokenAvalibleOrNot=async()=>{
    try {
      await axios.get("/api/client/client-appoinment-main");
      // console.log("data:",res.data.message);
      // alert(res.data.message)
    } catch (error) {
      console.error("Unauthorized:", error);
      navigate("/login");
      setTimeout(() => {
        alert("Login First...");
      }, 1000);
    }
    
  };

  useEffect(() => {
    ForCheckJwtTokenAvalibleOrNot();
  }, [])
  

  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <Doctors />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
