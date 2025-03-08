// import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const Home_Jwt_Token=async()=>{
      try {
        await axios.get("/api/client/home");
      } catch (error) {
        console.error("Unauthorized:", error);
        navigate("/login");
        setTimeout(() => {
          alert("Login First...");
        }, 1000);
      }

      
  }

  useEffect(() => {
    Home_Jwt_Token();
  }, [])
  

  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
