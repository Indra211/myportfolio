import React from "react";
import "./App.css";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import ResumeInFo from "./Container/ResumeInFo/ResumeInFo";
import ContactMe from "./Container/ContactMe/ContactMe";
import Navbar from "./Components/navbar/navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <Navbar />
      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <ResumeInFo />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
