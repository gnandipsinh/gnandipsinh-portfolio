import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiTrendingUp } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="01. ABOUT"
        title="About Me"
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Left — Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[15px] leading-7 text-white/55">
            I'm Gohil Gnandipsinh, a BCA pursuing student at MKBU, Bhavnagar and a
            Full Stack Developer with a strong foundation in modern web development.
            I enjoy building responsive, user-friendly web applications and working
            on practical real-world projects.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-white/55">
            My development journey focuses on continuously improving my technical
            skills, understanding real-world problems, and turning ideas into
            functional web applications.
          </p>
        </motion.div>

        {/* Right — Info Cards */}
        <div className="grid gap-4">
          <InfoCard
            icon={<FiBookOpen />}
            title="BCA Student"
            subtitle="MKBU, Bhavnagar"
          />
          <InfoCard
            icon={<FiCode />}
            title="Full Stack Developer"
            subtitle="Building web applications"
          />
          <InfoCard
            icon={<FiTrendingUp />}
            title="Open to Opportunities"
            subtitle="Ready to learn and grow"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="about-info-card"
    >
      <div className="about-info-icon">
        {icon}
      </div>
      <div>
        <h4 className="about-info-title">{title}</h4>
        <p className="about-info-subtitle">{subtitle}</p>
      </div>
    </motion.div>
  );
}
