import { motion } from "framer-motion";
import { FiCode, FiGlobe, FiLayers, FiServer } from "react-icons/fi";
import { services } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

const icons = [FiGlobe, FiCode, FiServer, FiLayers];

export function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeading
        eyebrow="06. SERVICES"
        title="What I can build."
        description="Practical development services centered around responsive and usable web experiences."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              className="card p-7 flex flex-col"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 grid place-items-center text-accent">
                <Icon className="text-lg" />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-base font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/45 flex-1">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
