import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero-section section-shell relative">
      <div className="hero-bg-glow hero-bg-glow-1" />
      <div className="hero-bg-glow hero-bg-glow-2" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 w-full">
        {/* Left — Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[11px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-base font-medium text-muted mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Gohil{" "}
            <span className="text-accent">Gnandipsinh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm font-semibold tracking-[0.2em] uppercase text-muted"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-lg text-[15px] leading-7 text-white/55"
          >
            Building responsive, practical and user-focused web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-3 max-w-lg text-sm leading-6 text-white/40"
          >
            {profile.profile}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-primary">
              View My Work <FiArrowRight />
            </button>
            <a
              href="/GOHIL_GNANDIPSINH_Resume.pdf"
              download="GOHIL_GNANDIPSINH_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume <FiArrowDown />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-7 flex items-center gap-5 text-sm text-white/40"
          >
            <div className="flex gap-2">
              <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <FiMapPin className="text-accent/60" />
              {profile.location}
            </div>
          </motion.div>
        </div>

        {/* Right — Terminal + Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block w-[380px] shrink-0 hero-visual-wrapper"
        >
          <TerminalCard />

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-floating-card"
          >
            <span className="hero-floating-card-dot" style={{ background: "#1683FF" }} />
            Ideas
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="hero-floating-card"
          >
            <span className="hero-floating-card-dot" style={{ background: "#3ECF8E" }} />
            Code
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="hero-floating-card"
          >
            <span className="hero-floating-card-dot" style={{ background: "#F59E0B" }} />
            Deploy
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="hero-floating-card"
          >
            <span className="hero-floating-card-dot" style={{ background: "#c792ea" }} />
            Repeat
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">developer.ts</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-line-number">1</span>
          <span className="terminal-code">
            <span className="terminal-keyword">const</span>{" "}
            <span className="terminal-property">developer</span>{" "}
            <span className="terminal-punctuation">=</span>{" "}
            <span className="terminal-bracket">{"{"}</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">2</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-property">name</span>
            <span className="terminal-punctuation">:</span>{" "}
            <span className="terminal-string">"GOHIL GNANDIPSINH"</span>
            <span className="terminal-punctuation">,</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">3</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-property">role</span>
            <span className="terminal-punctuation">:</span>{" "}
            <span className="terminal-string">"FULL STACK DEVELOPER"</span>
            <span className="terminal-punctuation">,</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">4</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-property">education</span>
            <span className="terminal-punctuation">:</span>{" "}
            <span className="terminal-string">"BCA, MKBU"</span>
            <span className="terminal-punctuation">,</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">5</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-property">stack</span>
            <span className="terminal-punctuation">:</span>{" "}
            <span className="terminal-bracket">[</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">6</span>
          <span className="terminal-code">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="terminal-string">"HTML"</span>
            <span className="terminal-punctuation">,</span>{" "}
            <span className="terminal-string">"CSS"</span>
            <span className="terminal-punctuation">,</span>{" "}
            <span className="terminal-string">"JavaScript"</span>
            <span className="terminal-punctuation">,</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">7</span>
          <span className="terminal-code">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="terminal-string">"Bootstrap"</span>
            <span className="terminal-punctuation">,</span>{" "}
            <span className="terminal-string">"Node.js"</span>
            <span className="terminal-punctuation">,</span>{" "}
            <span className="terminal-string">"Supabase"</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">8</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-bracket">]</span>
            <span className="terminal-punctuation">,</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">9</span>
          <span className="terminal-code">
            &nbsp;&nbsp;<span className="terminal-property">focus</span>
            <span className="terminal-punctuation">:</span>{" "}
            <span className="terminal-string">"clean, practical development"</span>
          </span>
        </div>
        <div className="terminal-line">
          <span className="terminal-line-number">10</span>
          <span className="terminal-code">
            <span className="terminal-bracket">{"}"}</span>
            <span className="terminal-punctuation">;</span>
            <span className="terminal-cursor" />
          </span>
        </div>
      </div>
    </div>
  );
}
