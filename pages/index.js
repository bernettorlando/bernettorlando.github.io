import '../styles/globals.css';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ThemeToggle from '../components/ThemeToggle';

function HomePage() {
  return (
    <div data-testid="homePage" className="container">
        <ThemeToggle />
        <div className="photo">
            <img src="https://i.imgur.com/pS4jhj2.png" alt="Bernett Orlando" />
        </div>
        <h1>Bernett Orlando</h1>
        <p>Tech Guy at Google</p>
        <div className="social">
            <a href="https://www.linkedin/in/bernett-orlando-1a9a9a9" target="_blank">LinkedIn</a> |
            <a href="https://github.com/bernett-orlando" target="_blank">GitHub</a>
        </div>
        <About />
        <Skills />
        <Projects />
    </div>
  );
}

export default HomePage;
