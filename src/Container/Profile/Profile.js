import React from "react";
import Typical from "react-typical";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/cherukuru-indrasena-reddy-b9717b228/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Indra211">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.facebook.com/indrasenareddy.cherukuru/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/i_n_d_r_a_cherukuru/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:indrasena0018@gmail.com">
                <i class="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm
              <span className="highlighted-text">
                {" "}
                Indrasena Reddy Cherukuru
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🔴",
                    1000,
                    "Python Developer 🐍",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Mobile Application Dev 😎",
                    1000,
                    "React/React-native Dev 📱",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                  ]}
                  wrapper="a"
                />
              </h1>
            </span>
            <span className="profile-details-tagline">
              Knack of Building Apllications with Front-End and Back-End
              operations.
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:indrasena0018@gmail.com">
              <button className="btn primary-btn">Get in Touch</button>
            </a>
            <a
              href="CHERUKURU INDRASENA REDDY .pdf"
              download={"CHERUKURU INDRASENA REDDY.pdf"}
            >
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
