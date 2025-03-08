import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At our core, we are a dedicated team of professionals committed to revolutionizing healthcare through innovative technology. Our mission is to enhance the efficiency and effectiveness of hospital operations, ensuring the highest standards of patient care.
          </p>
          <p>Our Vision for 2025</p>
          <p>
            In 2025, we are proud to introduce our cutting-edge Hospital Management System, designed to streamline administrative processes, improve patient management, and support healthcare providers in delivering exceptional care. We are continually evolving to meet the dynamic needs of the healthcare industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
