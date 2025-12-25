import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import About from './components/About';
import Blog from './components/Blog';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Blog />
      <OpenSource />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
