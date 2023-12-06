import "./App.css";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import ResumeInFo from "./Container/ResumeInFo/ResumeInFo";
import ContactMe from "./Container/ContactMe/ContactMe";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <ResumeInFo />
      <ContactMe />
    </div>
  );
}

export default App;
