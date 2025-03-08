import {useState} from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// For Toggle Navbar 
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


const Login = () => {

  // For Toggle Navbar 
  const { login } = useContext(AuthContext); // Get login function from context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    
    if(!email || !password || !confirmPassword) {
      alert("Please enter all required information...");
      return false;
    }
    else if(password != confirmPassword){
      alert("Passwords do not match...");
      return false;
    }
    else{
      // alert("Form Submitted successfully...");

      const res = await axios.post("/api/client/login",{email, password, confirmPassword});
      // console.log(res.data);
      if (res.data.message === "Login Successfully...") {
        login(res.data.token); // Call login function to update auth state(Send Jwt Token To Login Function.)
        navigate("/");
        alert("Login Successfully...");        
      }
      
      if(!res){
        alert(res.data.message);
        return;
      }
    }

  };



  return (
    <>
      <div className="container form-component login-form">
        <h2>Login</h2>
        <p>Please Login To Continue</p>
        <p>
        Access your account to manage your healthcare services efficiently.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="login" style={{
              cursor:"pointer"
            }}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
