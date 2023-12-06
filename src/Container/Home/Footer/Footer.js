import React from "react";
import footer_img from "../../../assests/Home/shape-bg.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={footer_img} alt="no internet connection" />
      </div>
    </div>
  );
};

export default Footer;
