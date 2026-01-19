import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordField from "./PasswordField";

const Register = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-left register-bg">
        <h1>Elevate your digital workflow.</h1>
        <p>
          Join thousands of professionals who streamline their projects and
          enhance productivity.
        </p>
      </div>

      <div className="auth-right">
        <h2>Create an account</h2>
        <p className="subtitle">Join the community and start building today.</p>

        <div className="row-input">
          <input placeholder="First Name" required />
          <input placeholder="Last Name" required />
        </div>

        <input placeholder="Email Address" required />
        <input placeholder="Mobile Number" required />
        <div className="password-wrapper">
          <PasswordField
            value={password}
            onChange={setPassword}
            showStrength={true}
          />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <label className="terms-checkbox">
          <input type="checkbox" /> I agree to the Terms of Service and Privacy
          Policy
        </label>

        <button className="primary-btn">Create Account →</button>

        <p className="bottom-text">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
