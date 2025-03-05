export interface HeaderProps {
  name: string;
  title: string;
  links: string[];
}

export interface AboutProps {
  expertise: string;
  skills: string[];
  background: string;
}

export interface Experience {
  title: string;
  role: string;
  description: string;
  company: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  email: string;
  github?: string;
  zenn?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface PortfolioData {
  header: HeaderProps;
  about: AboutProps;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  contact: Contact;
}