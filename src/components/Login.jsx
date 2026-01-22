import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = "Email is required";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) return;

    try {
      await api.post("/auth/login", {
        email,
        password,
      });

      setTimeout(() => {
      navigate("/dashboard");
    }, 800);
    } catch (err) {
      setErrors({
        api: err.response?.data?.message || "Invalid credentials",
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left login-bg">
        <h1 className="left-animate delay-1">Welcome Back</h1>
        <p className="left-animate delay-2">
          Access your personalized dashboard and continue your creative journey
          today.
        </p>
      </div>

      <form className="auth-right" onSubmit={handleLogin}>
        <h2>User Login</h2>
        <p className="subtitle">Please enter your details to sign in</p>

        <input
          className={errors.email ? "error" : ""}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <span className="error-text">{errors.email}</span>
        )}

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            className={errors.password ? "error" : ""}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}

        {errors.api && <span className="error-text">{errors.api}</span>}

        <div className="row">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="link">Forgot Password?</span>
        </div>

        <button className="primary-btn" type="submit">
          Login
        </button>

        <p className="bottom-text">
          New user? <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;