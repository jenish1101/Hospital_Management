import './Login.css';
import { useState } from 'react';
import axios from 'axios';

const Registration = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password, confirmPassword);
    try {
      const res = await axios.post("/api/admin/register", { username, password, confirmPassword });
      alert(res.data.message)
    } catch (error) {
      alert(error.message);
    }

  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Admin Registration</h1>
        <form className="login-form" onSubmit={handleFormSubmit}>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="input-field"
              onChange={e => setusername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input-field"
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              className="input-field"
              onChange={e => setconfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Register</button>
        </form>

      </div>
    </div>
  );
}

export default Registration;
