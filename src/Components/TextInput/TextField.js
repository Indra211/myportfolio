import React from "react";
import "./TextInput.css";
function TextField(props) {
  return (
    <div className="textinput-container">
      <div className="text-mandatory">
        <p>{props.label}</p>
        <p className="mandatory">*</p>
      </div>
      <textarea
        value={props.value}
        onChange={props.onChange}
        className="custom-textarea"
      />
    </div>
  );
}

export default TextField;
