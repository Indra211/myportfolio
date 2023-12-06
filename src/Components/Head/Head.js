import React from "react";
import "./Head.css";

function Head(props) {
  return (
    <div className="header-container">
      <span className="header-head">
        <h2>{props.head}</h2>
      </span>
      <span className="header-head">
        <p>{props.subHead}</p>
      </span>
      <div className="headline"></div>
    </div>
  );
}

export default Head;
