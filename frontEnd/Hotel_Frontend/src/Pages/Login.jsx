import "../Css/Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  const handleSubmit2 = () => {
    navigate("/provider");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        
        <div className="login-section">
          <h2>LOGIN AS USER</h2>
          <div className="input-container">
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <label>Re-Enter Password</label>
            <input type="password" />
          </div>
          <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
        </div>

        
        <div className="separator"></div>

        
        <div className="login-section">
          <h2>LOGIN AS MANAGER</h2>
          <div className="input-container">
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <label>Re-Enter Password</label>
            <input type="password" />
          </div>
          <button className="submit-button" onClick={handleSubmit2}>SUBMIT</button>
        </div>

      </div>
    </div>
  );
};

export default Login;
