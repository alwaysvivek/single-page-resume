export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  challenges?: string[];
  results?: string[];
  tech: string[];
  link: string;
  githubLink?: string;
  backendLink?: string;
  linkLabel?: string;
  isGithubOnly?: boolean;
  image?: string;
  domain: 'Artificial Intelligence' | 'Systems Engineering' | 'Full-Stack Development';
  subdomain?: string;
}

export interface CommandAction {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  action: () => void;
}

export interface Experience {
  role: string;
  entity: string;
  focus: string;
  date: string;
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
}
