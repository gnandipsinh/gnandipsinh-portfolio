import type { Project, Skill } from "../types";

export const profile = {
  name: "GOHIL GNANDIPSINH",
  role: "FULL STACK DEVELOPER",
  phone: "7990029329",
  email: "gohilgnandipsinh77@gmail.com",
  location: "Bhavnagar",
  github: "https://github.com/gnandipsinh",
  linkedin: "https://www.linkedin.com/in/gnandipsinh-gohil/",
  profile:
    "BCA pursuing student and Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and Node.js. Skilled in building responsive and user-friendly web applications with a focus on clean design, practical development, and continuous improvement.",
};

export const skills: Skill[] = [
  { name: "HTML5", category: "Frontend", icon: "html" },
  { name: "CSS3", category: "Frontend", icon: "css" },
  { name: "JavaScript", category: "Frontend", icon: "js" },
  { name: "Bootstrap 5", category: "Frontend", icon: "bootstrap" },
  { name: "Node.js", category: "Backend", icon: "node" },
  { name: "Supabase", category: "Database / Backend", icon: "database" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "VS Code", category: "Tools", icon: "code" },
];

export const projects: Project[] = [
  {
    title: "Vehicle Management System",
    description:
      "Developed a vehicle expense and profit management system using Node.js and Supabase.",
    features: [
      "Vehicle-wise trip management",
      "Income tracking",
      "Diesel expense tracking",
      "Driver payment tracking",
      "EMI tracking",
      "Itemized other expenses",
      "Automatic total expense calculation",
      "Profit calculation",
      "Date-wise reports",
      "Vehicle-wise reports",
    ],
    technologies: ["Node.js", "Supabase"],
    liveUrl: "https://rideprofit-beryl.vercel.app/",
    githubUrl: "https://github.com/gnandipsinh/rideprofit-tracker",
    featured: true,
    visual: "truck",
  },
  {
    title: "JavaScript Quiz Application",
    description:
      "Developed an interactive quiz application using HTML, CSS, and JavaScript.",
    features: [
      "Multiple choice questions",
      "Timer",
      "Score tracking",
      "Result screen",
      "Responsive UI",
      "Smooth animations",
      "Local storage for saving scores",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://javascript-quizapplication.netlify.app/",
    githubUrl: "https://github.com/gnandipsinh/JAVA_SCRIPT_Quize",
    featured: true,
    visual: "quiz",
  },
  {
    title: "DigitalOrbit – Digital Agency Website",
    description:
      "Designed and developed a responsive digital agency website using HTML5, CSS3, and Bootstrap 5.",
    features: [
      "Services section",
      "Portfolio section",
      "Testimonials",
      "Contact form",
      "Animations",
      "Responsive design",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap 5"],
    liveUrl: "https://gmweb-digital.netlify.app/",
    githubUrl: "https://github.com/gnandipsinh/bootstrap-web-project",
    featured: true,
    visual: "slice",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institute: "MKBU, Bhavnagar",
  status: "Currently Pursuing",
  sem1: "7.41",
  sem2: "7.36",
};

export const training = {
  title: "Full Stack Web Development",
  institute: "Red & White Skill Education",
  period: "2025 – Present",
};

export const aiTools = [
  "ChatGPT",
  "GitHub Copilot",
  "Google Gemini",
  "Claude",
  "Cursor AI",
];

export const services = [
  {
    title: "Responsive Web Development",
    description:
      "Clean, responsive and user-friendly interfaces for modern web experiences.",
  },
  {
    title: "Frontend Development",
    description:
      "Practical frontend implementation with HTML, CSS, JavaScript and Bootstrap.",
  },
  {
    title: "Backend Development",
    description:
      "Node.js-based backend development for practical web application needs.",
  },
  {
    title: "Web Application Development",
    description:
      "End-to-end practical solutions focused on usability, clean design and maintainability.",
  },
];
