export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  researchInterest?: string[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  research?: ResearchProps[];
  education?: EducationProps[];
  skills?: string[];
  awards?: AwardProps[];
  gallery?: GalleryItem[];
  blogs?: BlogPost[];
  resume?: ResumeProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface ResearchProps {
  title: string;
  summary: string;
  link?: string;
  venue?: string;
  year?: string;
}

export interface EducationProps {
  degree: string;
  institution: string;
  location?: string;
  session?: string;
  passingYear?: string;
  gpa?: string;
}

export interface SkillsProps {
  skills: string[];
}

export interface AwardProps {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
}

export interface GalleryItem {
  title?: string;
  image: string;
  caption?: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  summary?: string;
  link?: string;
  date?: string;
}

export interface ResumeProps {
  file?: string;
  link?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
