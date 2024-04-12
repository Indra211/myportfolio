import React from "react";
import Head from "../../Components/Head/Head";
import "./ResumeInFo.css";
import { Constants } from "../../Utility/Constants";
import { useState } from "react";
import SkillHead from "../../Components/SkillHead/SkillHead";

function ResumeInFo(props) {
  const [selectSkill, setSelectSkill] = useState(
    Constants?.Resume_headlines[0]?.type
  );
  const handleselect = (word) => {
    if (selectSkill === word) {
    } else {
      setSelectSkill(word);
    }
  };
  const workExperience = [
    "Technologies Used:",
    "Front-End:(JavaScript)React-Native,React-Js",
    "Back-End:Python(Django,FastApi)",
    "DataBase:Postgres,MongoDb",
    "Cloud:Aws",
    "Version Control:Github",
  ];
  const InterExperiece = [
    "Skills Learn:",
    "Front-End:(JavaScript)React-Native",
    "Back-End:Python(Django)",
  ];
  const ProgramSkills = [
    "Python",
    "Javascript",
    "ReactJs and React-Native",
    "Django",
    "FastApi",
    "NodeJs",
    "Full Stack Developer",
  ];
  const pd4 = ["Technologies: Html, CSS, JavaScript, Django"];
  const pd2 = ["Technologies: Python"];
  const pd3 = ["Technologies: React.js, Django"];
  const pd1 = [
    "Technologies: MongoDB, Express.js, React.js, Node.js, React Native(Mobile)",
  ];
  return (
    <div className="resume-container">
      <Head head={"Resume"} subHead={"My Formal Bio Details"} />
      <div className="resume-container-parent">
        <div className="skill-container">
          {Constants?.Resume_headlines?.map((item, ind) => (
            <>
              <div
                className={`skill-details ${
                  selectSkill === item?.type ? "active" : ""
                }`}
              >
                <i class={item?.icon}></i>
                <button
                  className={selectSkill === item?.type ? "active" : ""}
                  onClick={() => {
                    handleselect(item?.type);
                  }}
                >
                  {item?.type}
                </button>
              </div>
            </>
          ))}
        </div>
        {selectSkill === Constants?.Resume_headlines[0]?.type && (
          <div className="skill-container-detail">
            <SkillHead
              skill={"Audisankara College of Engg & Tech"}
              skillDetail={"Bachelor of Technology(EEE)"}
              period={"2020-2023"}
            />
            <SkillHead
              skill={"Audisankara College of Engg & Tech"}
              skillDetail={"Diploma(EEE)"}
              period={"2017-2020"}
            />
            <SkillHead
              skill={"Srimannaraya high School"}
              skillDetail={"S.S.C"}
              period={"2016-2017"}
            />
          </div>
        )}
        {selectSkill === Constants?.Resume_headlines[1]?.type && (
          <div className="skill-container-detail">
            <SkillHead
              skill={"Full Stack Developer"}
              skillDetail={`DESTRATUM SOLUTIONS PVT LTD CHENNAI`}
              period={"2023-Present"}
              data={workExperience}
            />
            <SkillHead
              skill={"Software Developer Intern"}
              skillDetail={`DESTRATUM SOLUTIONS PVT LTD CHENNAI`}
              period={"(Jan-Apr)2023"}
              data={InterExperiece}
            />
          </div>
        )}
        {selectSkill === Constants?.Resume_headlines[2]?.type && (
          <div className="skill-container-detail">
            {ProgramSkills?.map((item, ind) => (
              <SkillHead skill={item} />
            ))}
          </div>
        )}
        {selectSkill === Constants?.Resume_headlines[3]?.type && (
          <div className="skill-container-detail">
            <SkillHead
              skill={"Ecommerce Full Stack Development Project"}
              skillDetail={pd1[0]}
            />
            <SkillHead
              skill={"Personal Portfolio Website"}
              skillDetail={pd3[0]}
            />
            <SkillHead
              skill={"Music Player Application  "}
              skillDetail={pd2[0]}
            />
            <SkillHead
              skill={"Digital HealthCare Management System"}
              skillDetail={pd4[0]}
            />
          </div>
        )}
        {selectSkill === Constants?.Resume_headlines[4]?.type && (
          <div className="skill-container-detail">
            <SkillHead
              skill={"Teaching"}
              data={[
                "Apart from being tech enthusiast and code writer.",
                "I also love teach people what i know because i believe in sharing.",
              ]}
            />
            <SkillHead
              skill={"Coding"}
              skillDetail={"I have Interest taking new Challenges"}
            />
            <SkillHead
              skill={"Cooking"}
              skillDetail={
                "Passionate about creating delicious and innovative dishes through the art of cooking"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeInFo;
