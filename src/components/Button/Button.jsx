import React from "react";
import "./Button.css";

const Button = ({ text, color, onClick, size, icon: Icon }) => {
  return (
    <button 
      className={`btn ${size}`} 
      style={{ backgroundColor: color }} 
      onClick={onClick}
    >
      {Icon && <Icon className="btn-icon" />}
      {text}
    </button>
  );
};

export default Button;
