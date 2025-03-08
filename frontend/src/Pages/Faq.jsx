import { useState, useEffect } from "react";
import "./css/Faqs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const faqs = [
    { question: "What are your hospital's visiting hours?", answer: "Visiting hours are from 10 AM to 8 PM daily." },
    { question: "Do you accept health insurance?", answer: "Yes, we accept most major health insurance plans." },
    { question: "How can I book an appointment?", answer: "You can book an appointment online or call our reception desk." },
    { question: "What emergency services do you provide?", answer: "We have a 24/7 emergency department equipped to handle critical cases." },
    { question: "Do you have specialized doctors?", answer: "Yes, we have specialists in cardiology, neurology, orthopedics, and more." },
    { question: "How can I access my medical records?", answer: "You can request your medical records through our patient portal or at the hospital’s reception." },
    { question: "Is there an ambulance service available?", answer: "Yes, we provide 24/7 ambulance services for emergency cases." },
    { question: "Do you offer vaccination services?", answer: "Yes, we offer a variety of vaccinations for children and adults." },
    { question: "What are the charges for a general health checkup?", answer: "Our general health checkup packages start from ₹1,500. Please contact us for detailed pricing." },
    { question: "Do you provide home care or telemedicine services?", answer: "Yes, we offer telemedicine consultations and home care services for select treatments." }
  ];
  

const Faq = () => {

  const navigate = useNavigate();

  const Faq_Jwt_Token=async()=>{
    try {
      await axios.get("/api/client/faq");
    } catch (error) {
      console.error("Unauthorized:", error);
      navigate("/login");
      setTimeout(() => {
        alert("Login First...");
      }, 1000);
    }
    
  }

  useEffect(() => {
    Faq_Jwt_Token();
  }, [])
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
              <span className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}>&#9660;</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;