import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const getPasswordStrength = (password) => {
  if (password.length < 8) return "weak";

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  if (hasLetters && hasNumbers && hasSymbols) return "strong";
  if (hasLetters && hasNumbers) return "medium";
  return "weak";
};

export default function PasswordField({
  value,
  onChange,
  placeholder = "Password",
  showStrength = true
}) {
  const [show, setShow] = useState(false);
  const strength = value ? getPasswordStrength(value) : "";

  return (
    <div className="password-wrapper">
      <div className="password-field">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

       <span className="password-toggle" onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </span>
      </div>


      {showStrength && value && (
        <div className="password-hint">
          <div className="hint-bars">
            
            <span
              className={`hint-segment active ${
                strength === "weak"
                  ? "weak"
                  : strength === "medium"
                  ? "medium"
                  : "strong"
              }`}
            />


            <span
              className={`hint-segment ${
                strength === "medium" || strength === "strong"
                  ? `active ${strength === "strong" ? "strong" : "medium"}`
                  : ""
              }`}
            />


            <span
              className={`hint-segment ${
                strength === "strong" ? "active strong" : ""
              }`}
            />
          </div>

          <span className="hint-text">
            {strength === "weak" &&
              "Minimum 8 characters with a mix of letters, numbers & symbols."}
            {strength === "medium" &&
              "Good password, add symbols to make it stronger."}
            {strength === "strong" && "Strong password"}
          </span>
        </div>
      )}
    </div>
  );
}