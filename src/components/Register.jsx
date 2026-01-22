import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordField from "./PasswordField";
import api from "../api/api";
import RegistrationSuccessPopUp from "./RegistrationSuccessPopUp";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      const res = await api.post("/auth/register", form);
      setShowSuccessPopup(true);
      setSuccess(res.data.message);
    } catch (err) {
      setErrors({
        api: err.response?.data?.message || "Registration failed",
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left register-bg">
        <h1 className="left-animate delay-1 ">Elevate your digital workflow.</h1>
        <p className="left-animate delay-2">
          Join thousands of professionals who streamline their projects and
          enhance productivity.
        </p>
      </div>

      <form className="auth-right" onSubmit={handleRegister}>
        <h2>Create an account</h2>
        <p className="subtitle">Join the community and start building today.</p>

        <div className="row-input">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <PasswordField
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
          showStrength={true}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}

        <label className="terms-checkbox">
          <input type="checkbox" required /> I agree to the Terms of Service and
          Privacy Policy
        </label>

        {errors.api && <span className="error-text">{errors.api}</span>}
        {success && <span className="success-text">{success}</span>}

        <button className="primary-btn" type="submit">
          Create Account →
        </button>

        <p className="bottom-text">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>

      <RegistrationSuccessPopUp
        show={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </div>
  );
};

export default Register;
