import './App.css';
import About from './UI/About/About';
import Home from './UI/HomePage/Home';
import Nav from './UI/Navbar/Nav';
import Projects from './UI/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
