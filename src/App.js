import './App.css';
import About from './UI/About/About';
import Home from './UI/HomePage/Home';
import Projects from './UI/Projects/Projects';
import Particles from "react-tsparticles";
import particles from "./UI/Particles/particle-config"
import { Route, Switch } from "react-router-dom";
import Admin from "./UI/Admin/Admin"

function App() {

  return (
    <div className="app">
      <div className="particles">
        <Particles
          options={particles}
        />
      </div>
      <Switch>
        <Route path="/admin" exact>
          <Admin />
        </Route>

        <Route path="*">

          <Home />
          <Projects />
          <About />
        </Route>
      </Switch>


    </div >
  );
}

export default App;
