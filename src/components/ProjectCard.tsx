import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiCheck } from "react-icons/fi";
import type { Project } from "../types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="project-card"
      tabIndex={0}
      aria-label={`${project.title} project`}
    >
      {/* Visual Area */}
      <div className="project-visual">
        <span className="project-number">0{index + 1}</span>
        <ProjectVisual type={project.visual} />
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Title + Description */}
        <h3 className="text-lg font-bold text-white tracking-tight">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/50">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-3">
            Key Features
          </p>
          <ul className="project-features">
            {project.features.slice(0, 6).map((feature) => (
              <li key={feature} className="project-feature-item">
                <FiCheck className="project-feature-check" />
                <span>{feature}</span>
              </li>
            ))}
            {project.features.length > 6 && (
              <li className="project-feature-item text-white/30">
                +{project.features.length - 6} more
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              className="project-btn project-btn-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo <FiArrowUpRight />
            </a>
          )}
          {project.githubUrl && (
            <a
              className="project-btn project-btn-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code <FiGithub />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "truck") return <TruckVisual />;
  if (type === "quiz") return <QuizVisual />;
  return <SliceVisual />;
}

function TruckVisual() {
  return (
    <div className="project-visual-inner flex flex-col items-center gap-3">
      <div className="flex items-end gap-2 h-16">
        <div className="w-6 bg-accent/20 rounded-t-md" style={{ height: "40%" }} />
        <div className="w-6 bg-accent/35 rounded-t-md" style={{ height: "70%" }} />
        <div className="w-6 bg-accent/50 rounded-t-md" style={{ height: "55%" }} />
        <div className="w-6 bg-accent/70 rounded-t-md" style={{ height: "90%" }} />
        <div className="w-6 bg-accent/40 rounded-t-md" style={{ height: "60%" }} />
        <div className="w-6 bg-accent/25 rounded-t-md" style={{ height: "35%" }} />
      </div>
      <div className="flex items-center gap-3 text-xs text-white/40">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-accent/60" />
          Income
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          Expenses
        </span>
      </div>
      <div className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-accent/60 uppercase">
        Vehicle Management System
      </div>
    </div>
  );
}

function QuizVisual() {
  return (
    <div className="project-visual-inner flex flex-col items-center gap-3 w-full max-w-[240px]">
      <div className="w-full rounded-xl border border-white/8 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-accent">Q. 03</span>
          <span className="text-[10px] text-white/30">0:15</span>
        </div>
        <p className="text-xs text-white/60 leading-5">
          What does <span className="text-accent">JavaScript</span> primarily
          add to HTML?
        </p>
        <div className="mt-3 grid gap-2">
          {["Structure", "Interactivity", "Styling", "Database"].map(
            (opt, i) => (
              <div
                key={opt}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] ${
                  i === 1
                    ? "border-accent/40 bg-accent/8 text-accent"
                    : "border-white/5 text-white/40"
                }`}
              >
                <span className="h-3 w-3 rounded-full border border-current flex-shrink-0" />
                {opt}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function SliceVisual() {
  return (
    <div className="project-visual-inner flex flex-col items-center gap-3">
      <div className="w-[260px] rounded-xl border border-white/8 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <div className="ml-2 flex-1 h-4 rounded-md bg-white/[0.03] border border-white/5" />
        </div>
        <div className="p-4">
          <div className="h-3 w-24 bg-accent/20 rounded mb-2" />
          <div className="h-2 w-40 bg-white/5 rounded mb-1" />
          <div className="h-2 w-32 bg-white/5 rounded mb-3" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-accent/8" />
            <div className="h-12 rounded-lg bg-white/[0.03]" />
            <div className="h-12 rounded-lg bg-white/[0.03]" />
          </div>
        </div>
      </div>
      <div className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-accent/60 uppercase">
        DigitalOrbit Agency
      </div>
    </div>
  );
}
