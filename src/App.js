import './App.css';
import About from './UI/About/About';
import Home from './UI/HomePage/Home';
import Projects from './UI/Projects/Projects';
import Particles from "react-tsparticles";
import particles from "./UI/Particles/particle-config"

function App() {

  return (
    <div className="app">
      <div className="particles">
        <Particles
          options={particles}
        />
      </div>
      <Home />
      <Projects />
      <About />

    </div>
  );
}

export default App;
