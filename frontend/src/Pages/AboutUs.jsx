import Hero from "../components/Hero";
import Biography from "../components/Biography";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

  const navigate = useNavigate();

  const JwtTokenVerify = async () => {
    try {
      await axios.get("/api/client/about");
      // console.log(res);
    } catch (error) {
      console.error("Unauthorized:", error);
      navigate("/login");
      setTimeout(() => {
        alert("Login First...");
      }, 1000);
    }

  };

  useEffect(() => {
    JwtTokenVerify();
  }, [])


  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
