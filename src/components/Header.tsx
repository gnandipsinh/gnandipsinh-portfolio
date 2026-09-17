import { useState, useEffect } from "react";
import { FiCode, FiGithub, FiHome, FiLayers, FiLinkedin, FiMail, FiMenu, FiUser, FiX, FiBookOpen, FiAward, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";

const navItems = [
  ["Home", "home", FiHome],
  ["About", "about", FiUser],
  ["Skills", "skills", FiCode],
  ["Projects", "projects", FiLayers],
  ["Education", "education", FiBookOpen],
  ["Training", "training", FiAward],
  ["Contact", "contact", FiMail],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  };

  const toggleMenu = () => {
    if (open) {
      closeMenu();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="header-inner">
          {/* Left — Logo */}
          <button className="header-brand" onClick={() => navigate("home")} aria-label="Go home">
            <span className="gg-mark-header">GG</span>
            <div className="header-brand-text">
              <span className="header-brand-name">GOHIL GNANDIPSINH</span>
              <span className="header-brand-role">FULL STACK DEVELOPER</span>
            </div>
          </button>

          {/* Center — Nav */}
          <nav className="header-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className={`header-nav-link ${active === id ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right — Resume + Social */}
          <div className="header-actions">
            <a
              href="/GOHIL_GNANDIPSINH_Resume.pdf"
              download="GOHIL_GNANDIPSINH_Resume.pdf"
              className="header-resume-btn"
              aria-label="Download Resume"
            >
              <FiDownload />
              <span>Resume</span>
            </a>
            <div className="header-social">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="header-social-icon"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="header-social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile — Hamburger */}
          <button
            className="header-hamburger"
            onClick={toggleMenu}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className={`mobile-menu-overlay ${closing ? "closed" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      {open && (
        <div
          className={`mobile-menu-panel ${closing ? "closed" : ""}`}
          role="menu"
          aria-label="Navigation menu"
        >
          <div className="mobile-menu-header">
            <span className="gg-mark-mobile">GG</span>
            <div>
              <div className="mobile-brand-name">GOHIL GNANDIPSINH</div>
              <div className="mobile-brand-role">FULL STACK DEVELOPER</div>
            </div>
          </div>
          <nav className="mobile-menu-nav">
            {navItems.map(([label, id, Icon]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className={`mobile-menu-link ${active === id ? "active" : ""}`}
                role="menuitem"
              >
                <Icon className="mobile-menu-icon" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <a
              href="/GOHIL_GNANDIPSINH_Resume.pdf"
              download="GOHIL_GNANDIPSINH_Resume.pdf"
              className="mobile-resume-btn"
            >
              <FiDownload /> Download Resume
            </a>
            <div className="mobile-social-row">
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
        </div>
      )}
    </>
  );
}
