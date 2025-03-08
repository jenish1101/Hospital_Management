import "./App.css"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Registration from "./Components/Registration"
import Appoinments from "./Components/Appoinments"
import ClientMessage from "./Components/ClientMessage"
import Doctors from "./Components/Doctors"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <h1>App</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/appointments" element={<Appoinments />} />
          <Route path="/client-message" element={<ClientMessage />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
