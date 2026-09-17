import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";
import { education, training } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Journey"
        title="Education & training."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <motion.div
          whileHover={{ y: -4 }}
          className="card p-7 sm:p-8"
        >
          <div className="flex items-start gap-5">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 grid place-items-center text-accent">
              <FiBookOpen className="text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                Education
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-white/50">{education.institute}</p>
              <p className="mt-1 text-xs text-accent/70">{education.status}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    SEM 1
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-accent">
                    {education.sem1}
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    SEM 2
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-accent">
                    {education.sem2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Training */}
        <motion.div
          whileHover={{ y: -4 }}
          className="card p-7 sm:p-8"
        >
          <div className="flex items-start gap-5">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 grid place-items-center text-accent">
              <FiAward className="text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                Training
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {training.title}
              </h3>
              <p className="mt-1 text-sm text-white/50">{training.institute}</p>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <FiCalendar className="text-accent text-sm" />
                <div>
                  <p className="text-xs font-semibold text-white/60">
                    {training.period}
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    Continuous learning through practical development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
