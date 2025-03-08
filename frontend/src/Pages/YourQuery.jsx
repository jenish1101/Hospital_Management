import { useState, useEffect } from "react";
import axios from "axios";
import "./css/YourQuery.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const YourQuery = () => {
  const [ClientMessage, setClientMessage] = useState([]);
  const navigate = useNavigate();

  const ClientMessageData = async () => {
    try {
      const response = await axios.get("/api/client/client-query");
      // console.log(response);
      setClientMessage(response.data.ClientMessage);
    } 
    catch (error) {
      console.log(error.response?.data?.message || "Error fetching data");
      navigate("/login"); // Redirect to login if unauthorized
      setTimeout(() => {
        alert("Login First...");
      }, 1000);
    }

  };

  useEffect(() => {
    ClientMessageData();
  }, []);

  return (
    <div className="query-container">
      <h1>Your Queries</h1>
      {ClientMessage.map((elements, index) => (
        <div key={index} className="query-box">
          <h2>Question: {elements.message}</h2>
          <p>Answer: {elements.reply}</p>
        </div>
      ))}
    </div>
  );
};

export default YourQuery;
