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
  const ProjectData1 = [
    "* To Maintain Health reports of Patient Digitally.",
    "* Smooth communication between Doctor and Patient.",
    "* Appointment Booking of Patient To Doctor.",
    "* Digital Prescription",
    "Tools Used:",
    "Front-End:html,css,js",
    "Back-End:Python(Django)",
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
              skill={"Digital HealthCare Management System"}
              data={ProjectData1}
            />
            <SkillHead
              skill={"Solar Tracking System Using AURDINO"}
              skillDetail={
                "* To Track More Solar energy from Sun and give end user."
              }
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
