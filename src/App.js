import React from "react";
import "./App.css";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import ResumeInFo from "./Container/ResumeInFo/ResumeInFo";
import ContactMe from "./Container/ContactMe/ContactMe";
import Navbar from "./Components/navbar/navbar";
import { ToastContainer } from "react-toastify";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <Navbar />
      <div className="content">
        <section id="home">
          <ScrollAnimation animateIn="fadeIn">
            <Home />
          </ScrollAnimation>
        </section>
        <section id="about">
          <ScrollAnimation animateIn="bounceInLeft">
            <About />
          </ScrollAnimation>
        </section>
        <section id="resume">
          <ScrollAnimation animateIn="bounceInRight">
            <ResumeInFo />
          </ScrollAnimation>
        </section>
        <section id="contact">
          <ScrollAnimation animateIn="flipInY">
            <ContactMe />
          </ScrollAnimation>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
