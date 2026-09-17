import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { profile } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <SectionHeading
        eyebrow="07. CONTACT"
        title="Let's Work Together"
        description="Have a project in mind or want to connect? Let's build something useful together."
      />

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <ContactCard
          icon={<FiPhone />}
          label="Phone"
          sublabel="India"
          value={profile.phone}
          href={`tel:${profile.phone}`}
          actionLabel="Call Now"
        />
        <ContactCard
          icon={<FiMail />}
          label="Email"
          sublabel="Mail"
          value={profile.email}
          href={`mailto:${profile.email}`}
          actionLabel="Send Email"
        />
        <ContactCard
          icon={<FiMapPin />}
          label="Location"
          sublabel="Address"
          value="Bhavnagar, Gujarat"
          actionLabel="View on Map"
        />
        <ContactCard
          icon={<FiGithub />}
          label="GitHub"
          sublabel="Follow"
          value="gnandipsinh"
          href={profile.github}
          external
          actionLabel="Visit Profile"
        />
        <ContactCard
          icon={<FiLinkedin />}
          label="LinkedIn"
          sublabel="Connect"
          value="gnandipsinh-gohil"
          href={profile.linkedin}
          external
          actionLabel="Visit Profile"
        />
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  sublabel,
  value,
  href,
  external,
  actionLabel,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  value: string;
  href?: string;
  external?: boolean;
  actionLabel: string;
}) {
  const content = (
    <div className="contact-card-inner">
      <div className="contact-card-top">
        <div className="contact-card-icon">{icon}</div>
        <div>
          <span className="contact-card-label">{label}</span>
          <span className="contact-card-sublabel">{sublabel}</span>
        </div>
      </div>
      <p className="contact-card-value">{value}</p>
      <span className="contact-card-action">
        {actionLabel} <FiArrowUpRight />
      </span>
    </div>
  );

  if (!href) {
    return <div className="contact-card">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="contact-card"
    >
      {content}
    </a>
  );
}
