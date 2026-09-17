import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

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

export function TechStrip() {
  return (
    <section className="tech-strip">
      <div className="tech-strip-inner">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="tech-strip-label"
        >
          TECHNOLOGIES I WORK WITH
        </motion.p>
        <div className="tech-strip-row">
          {skills.map((skill, index) => {
            const icon = techIcons[skill.name];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="tech-strip-item"
              >
                <div
                  className="tech-strip-icon"
                  style={{ background: icon?.bg, color: icon?.color }}
                >
                  {icon?.label || skill.name.charAt(0)}
                </div>
                <span className="tech-strip-name">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
