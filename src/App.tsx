import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { TechStrip } from "./sections/TechStrip";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Training } from "./sections/Training";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { profile } from "./data/portfolio";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

const footerNav = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Training", "training"],
  ["Contact", "contact"],
] as const;

function App() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <ScrollProgress />
      <Header />
      <main className="main-content">
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Training />
        <Services />
        <Contact />

        <footer className="site-footer">
          <div className="footer-inner">
            {/* Left — Brand */}
            <div className="footer-brand">
              <div className="footer-brand-row">
                <span className="gg-mark-footer">GG</span>
                <div>
                  <div className="footer-brand-name">Gohil Gnandipsinh</div>
                  <div className="footer-brand-role">Full Stack Developer</div>
                </div>
              </div>
            </div>

            {/* Center — Nav */}
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerNav.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right — Social */}
            <div className="footer-social">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2026 Gohil Gnandipsinh. All rights reserved.
            </p>
            <p className="footer-role">Full Stack Developer</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
