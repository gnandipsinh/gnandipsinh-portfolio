import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import { aiTools, skills } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

const techIcons: Record<string, { label: string; color: string; bg: string }> = {
  HTML5: { label: "H5", color: "#E34F26", bg: "rgba(227,79,38,0.1)" },
  CSS3: { label: "C3", color: "#1572B6", bg: "rgba(21,114,182,0.1)" },
  JavaScript: { label: "JS", color: "#F7DF1E", bg: "rgba(247,223,30,0.1)" },
  "Bootstrap 5": { label: "B5", color: "#7952B3", bg: "rgba(121,82,179,0.1)" },
  "Node.js": { label: "N", color: "#339933", bg: "rgba(51,153,51,0.1)" },
  Supabase: { label: "SB", color: "#3ECF8E", bg: "rgba(62,207,142,0.1)" },
  GitHub: { label: "GH", color: "#94A3B8", bg: "rgba(148,163,184,0.08)" },
  "VS Code": { label: "VS", color: "#007ACC", bg: "rgba(0,122,204,0.1)" },
};

const aiToolIcons: Record<string, { label: string; color: string; bg: string }> = {
  "ChatGPT": { label: "AI", color: "#10A37F", bg: "rgba(16,163,127,0.1)" },
  "GitHub Copilot": { label: "CP", color: "#94A3B8", bg: "rgba(148,163,184,0.08)" },
  "Google Gemini": { label: "G", color: "#1683FF", bg: "rgba(22,131,255,0.1)" },
  "Claude": { label: "C", color: "#D97706", bg: "rgba(217,119,6,0.1)" },
  "Cursor AI": { label: "Cu", color: "#1683FF", bg: "rgba(22,131,255,0.1)" },
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="02. SKILLS"
        title="Technical Skills"
        description="Technologies and tools I work with."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Technical Skills */}
        <div>
          <div className="skills-sub-heading">Technical Skills</div>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => {
              const icon = techIcons[skill.name];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="skill-tile"
                >
                  <div
                    className="skill-icon"
                    style={{ background: icon?.bg, color: icon?.color }}
                  >
                    {icon?.label || skill.name.charAt(0)}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI Tools */}
        <div>
          <div className="skills-sub-heading">AI Tools</div>
          <p className="text-sm text-white/40 mb-4">AI tools I use to enhance productivity.</p>
          <div className="grid grid-cols-2 gap-3">
            {aiTools.map((tool, index) => {
              const icon = aiToolIcons[tool];
              return (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="skill-tile"
                >
                  <div
                    className="skill-icon"
                    style={{ background: icon?.bg, color: icon?.color }}
                  >
                    {icon?.label || tool.charAt(0)}
                  </div>
                  <span className="skill-name">{tool}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
