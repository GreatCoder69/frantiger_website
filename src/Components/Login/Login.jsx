import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ForgotPass from "./ForgotPass";
import "./Login.css";

const Login = ({ onClose, onLogin }) => {
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const { admin, users } = require("../../Components/Login/userCredentials.json");

    if (username === admin.username && password === admin.password) {
      onLogin(username, password);
      onClose();
      navigate("/admin");
    } else if (users.some((user) => user.username === username && user.password === password)) {
      onLogin(username, password);
      onClose();
      navigate("/user");
    } else {
      setError("Invalid username or password");
    }
  };

  if (showForgotPass) {
    return <ForgotPass onClose={() => setShowForgotPass(false)} />;
  }

  return (
    <div className="Loginmodal-overlay" onClick={onClose}>
      <div className="Loginmodal-content" onClick={(e) => e.stopPropagation()}>
        <button className="Loginclose-button" onClick={onClose}>x</button>
        <h2 className="LoginTittle">Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username or Email Address*</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" name="password" required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div>
            <input type="checkbox" id="remember" name="remember" className="LoginCheckboxinput" />
            <label htmlFor="remember" className="LoginCheckbox">Keep me Signed in</label>
          </div>
          <button className="LoginButton" type="submit">Sign in</button>
          <a href="#" className="ForgotPasswordLink" onClick={(e) => { e.preventDefault(); setShowForgotPass(true); }}>Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Login;
