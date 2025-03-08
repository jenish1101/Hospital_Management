import './Login.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext" // Import AuthContext
const Login = () => {

  const { login } = useContext(AuthContext); // Get login function from context

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmition = async (e) => {
    e.preventDefault();
    // console.log(username,password);
    try {
      const res = await axios.post("/api/admin/login", { username, password });
      // console.log(res);
      alert(res.data.message);
      if(res.data.message === "Admin Login successfully..."){
        login(res.data.token); // Call login function to update auth state
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Admin Login</h1>
        <form className="login-form" onSubmit={handleFormSubmition}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
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
          <button type="submit" className="login-button">Login</button>
        </form>
        {/* <div className="footer">
          <p>Forgot your password? <a href="#">Reset here</a></p>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
