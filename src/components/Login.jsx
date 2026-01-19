import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required";
    if (!form.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) {
      console.log("LOGIN PAYLOAD", form);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-left login-bg">
        <h1>Welcome Back</h1>
        <p>Access your personalized dashboard and continue your creative journey today.</p>
      </div>

      <div className="auth-right">
        <h2>User Login</h2>
        <p className="subtitle">Please enter your details to sign in</p>

        <input
          className={errors.username ? "error" : ""}
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        {errors.username && <span className="error-text">{errors.username}</span>}

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            className={errors.password ? "error" : ""}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
        </div>
        {errors.password && <span className="error-text">{errors.password}</span>}

        <div className="row">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="link">Forgot Password?</span>
        </div>

        <button className="primary-btn" onClick={submit}>Login</button>

        <p className="bottom-text">
          New user? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
