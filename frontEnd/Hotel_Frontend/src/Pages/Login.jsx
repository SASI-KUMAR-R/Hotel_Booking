import { useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Pages/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerPassword, setManagerPassword] = useState("");

  const handleUserSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login/user", {
        email: userEmail,
        password: userPassword,
      });
      alert(response.data.message);
      login('user'); // Update AuthContext with user type
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "User login failed");
    }
  };

  const handleManagerSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login/manager", {
        email: managerEmail,
        password: managerPassword,
      });
      alert(response.data.message);
      login('manager'); // Update AuthContext with user type
      navigate("/provider");
    } catch (error) {
      alert(error.response?.data?.message || "Manager login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <h2>LOGIN AS USER</h2>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleUserSubmit}>
            LOGIN
          </button>
        </div>

        <div className="separator"></div>

        <div className="login-section">
          <h2>LOGIN AS MANAGER</h2>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={managerEmail}
              onChange={(e) => setManagerEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={managerPassword}
              onChange={(e) => setManagerPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleManagerSubmit}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;