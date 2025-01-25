import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

const ForgotPass = ({ onClose }) => {
  const ForgothandleLogin = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    onClose();
  };

  return (
    <div className="ForgotLoginmodal-overlay" onClick={onClose}>
      <div
        className="ForgotLoginmodal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="Loginclose-button" onClick={onClose}>
          x
        </button>
        <h2 className="LoginTittle">Forgotten Password</h2>
        <form onSubmit={ForgothandleLogin}>
          <div className="form-group">
            <label htmlFor="username">Email Address*</label>
            <input type="text" id="username" name="username" required />
          </div>
          <button className="LoginButton" type="submit">
            Submit
          </button>
          <button className="Forgotclose-button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

ForgotPass.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ForgotPass;
