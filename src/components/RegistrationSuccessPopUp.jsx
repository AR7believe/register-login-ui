import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RegistrationSuccessPopUp = ({show, onClose}) => {
  
    const navigate = useNavigate();

    useEffect(() => {
        if (!show) return;
            const timer = setTimeout(() => {
                onClose();
                navigate('/');
            }, 5000);   

            return () => clearTimeout(timer);
  }, [show, navigate, onClose]);

  if(!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>🎉 Registration Successful</h2>
        <p>Your account has been created successfully.</p>
        <p className="redirect-text">
          Redirecting to login page in <strong>5 seconds</strong>…
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/")}
        >
          Go to Login Now
        </button>

        <span className="popup-close" onClick={onClose}>×</span>
      </div>
    </div>
  )
}

export default RegistrationSuccessPopUp
