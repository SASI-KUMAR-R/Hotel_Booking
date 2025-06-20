import { useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");

  const [managerEmail, setManagerEmail] = useState("");
  const [managerPassword, setManagerPassword] = useState("");
  const [managerRePassword, setManagerRePassword] = useState("");

  const handleUserSubmit = async () => {
    if (userPassword !== userRePassword) {
      alert("Hey Bro! Check Your Password");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login/user",
        {
          email: userEmail,
          password: userPassword,
        }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "User login failed");
    }
  };

  const handleManagerSubmit = async () => {
    if (managerPassword !== managerRePassword) {
      alert("Hey Bro! Check Your Password");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login/manager",
        {
          email: managerEmail,
          password: managerPassword,
        }
      );
      alert(response.data.message);
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
            <label>Re-Enter Password</label>
            <input
              type="password"
              value={userRePassword}
              onChange={(e) => setUserRePassword(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleUserSubmit}>
            SUBMIT
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
            <label>Re-Enter Password</label>
            <input
              type="password"
              value={managerRePassword}
              onChange={(e) => setManagerRePassword(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleManagerSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
