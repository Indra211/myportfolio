import React from "react";
import "./SkillHead.css";

function SkillHead(props) {
  const data = props.data;
  return (
    <div className="skill-head-container">
      <div className="skill-head-parent">
        <div className="skill-ball-dot"></div>
        <div className="skill-text">
          {props.skill && <h6>{props.skill}</h6>}
          {props.skillDetail && <p>{props.skillDetail}</p>}
          {data && data?.map((item, ind) => <p>{item}</p>)}
        </div>
      </div>
      {props.period && (
        <div className="skill-period">
          <p>{props.period}</p>
        </div>
      )}
    </div>
  );
}

export default SkillHead;
