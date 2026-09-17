export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  visual: "truck" | "slice" | "quiz";
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}