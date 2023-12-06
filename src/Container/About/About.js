import React from "react";
import Head from "../../Components/Head/Head";
import "./About.css";
import { Constants } from "../../Utility/Constants";

function About(props) {
  return (
    <div className="about-container">
      <Head head={"About me"} subHead={"Brief About me"} />
      <div className="about-objective">
        <p>{Constants.objective}</p>
        <div className="about-content">
          <h6 className="about-head">Some of the Highlights</h6>
          {Constants?.Skils?.map((item, ind) => (
            <div className="ball-dot-skill">
              <div className="ball-dot"></div>
              <p className="about-skill">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
