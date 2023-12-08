import React from "react";
import "./TextInput.css";

function TextInput({ label, value, onChange, type, style }) {
  return (
    <div className="textinput-container">
      <div className="text-mandatory">
        <p>{label}</p>
        <p className="mandatory">*</p>
      </div>
      <input
        required
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        style={style}
        className="custom-input" // Add a custom class for styling
      />
    </div>
  );
}

export default TextInput;
