import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
