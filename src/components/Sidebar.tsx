import { useState, useEffect } from "react";
import { FiCode, FiGithub, FiHome, FiLayers, FiLinkedin, FiMail, FiMenu, FiUser, FiX, FiBookOpen, FiAward } from "react-icons/fi";
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

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [closing, setClosing] = useState(false);

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
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
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
      <aside className="sidebar" role="navigation" aria-label="Main navigation">
        <div className="sidebar-brand">
          <button className="gg-mark" onClick={() => navigate("home")} aria-label="Go home">
            GG
          </button>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.12em] text-white">
              GOHIL GNANDIPSINH
            </div>
            <div className="mt-1 text-[9px] font-medium tracking-[0.2em] text-accent">
              FULL STACK DEVELOPER
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(([label, id, Icon]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`sidebar-link ${active === id ? "active" : ""}`}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <div className="mb-6 h-px w-8 bg-white/10" />
          <div className="flex gap-2">
            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiGithub />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiLinkedin />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${profile.email}`}
              className="social-icon"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </aside>

      <header className="mobile-header" role="banner">
        <button className="gg-mark" onClick={() => navigate("home")} aria-label="Go home">
          GG
        </button>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {open && (
        <div
          className={`mobile-menu ${closing ? "closed" : ""}`}
          role="menu"
          aria-label="Navigation menu"
        >
          {navItems.map(([label, id, Icon]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className="mobile-link"
              role="menuitem"
            >
              <Icon /> {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
